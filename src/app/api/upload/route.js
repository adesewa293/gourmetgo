import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import uniqid from "uniqid";

export async function POST(req) {
  const data = await req.formData();
  console.log("data", data, data.get("file"));

  try {
    if (data.get("file")) {
      const file = data.get("file");

      const s3Client = new S3Client({
        region: "us-east-1",
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY,
          secretAccessKey: process.env.AWS_SECRET_KEY,
        },
      });
      const extension = file.name.split(".").slice(-1)[0];
      const newFileName = uniqid() + "." + extension;

      const chunks = [];
      for await (const chunk of file.stream()) {
        chunks.push(chunk);
      }
      const buffer = Buffer.concat(chunks);

      const bucket = "gourmetgo";

      await s3Client.send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: newFileName,
          ACL: "public-read",
          ContentType: file.type,
          Body: buffer,
        })
      );
      const link = "https://" + bucket + ".s3.amazonaws.com/" + newFileName;
      return Response.json(link);
    }
    return Response.json(true);
  } catch (error) {
    console.log("error", error);
    return Response.json(false, {
      status: 500
    });
  }
}
