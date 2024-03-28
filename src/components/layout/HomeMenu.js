import Image from "next/image";


export default function HomeMenu() {
  return (
    <section>
      <div className="absolute left-0 right-0">
        <div className="h-48 w-48 absolute left-0">
        <Image src={"/gourmet4.jpg"} alt={"food"} fill objectFit={'contain'}/>
        </div>
        <div className="h-48 w-48 absolute right-0">
        <Image src={"/gourmet4.jpg"} alt={"food"} fill objectFit={'contain'}/>
        </div>
      </div>
      <div className="text-center">
        <h3 className="uppercase text-gray-500 font-semibold leading-4">Check out</h3>
        <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
      </div>
    </section>
  );
}
