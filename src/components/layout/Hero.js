import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
      <h1 className="text-4xl font-semibold">Everything<br /> is better <br/>with&nbsp;<span className="text-primary">Gourmet Food</span></h1>
      <p className="my-6 text-gray-500 text-sm">
        Our gourmet food is meticulously crafted, offering a symphony
        of taste, texture, and presentation for discerning palates to savor and
        celebrate.
      </p>
      <div className="flex gap-4 text-sm">
        <button className="bg-primary uppercase items-center flex gap-2 text-white px-8 py-2 rounded-full">
          Order now
          <Right />
        </button>
        <button className="flex gap-2 py-2 text-gray-600 font-semibold items-center">
          Learn more
          <Right />
          </button>
      </div>
      </div>
      
      <div className="relative">
        <Image
          src="/gourmet2.jpg"
          alt="food"
          fill
          objectFit="contain"
        />
      </div>
    </section>
  );
}
