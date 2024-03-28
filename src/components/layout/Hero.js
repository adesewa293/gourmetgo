import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div>
      <h1 className="text-4xl font-semibold">Everything is better with food</h1>
      <p className="my-4 text-gray-500">
        Indulge in exquisite flavors, artisanal ingredients, and culinary
        artistry. Our gourmet food is meticulously crafted, offering a symphony
        of taste, texture, and presentation for discerning palates to savor and
        celebrate.
      </p>
      <div>
        <button className="bg-primary text-white px-8 py-2 rounded-full">
          Order now
        </button>
        <button>Learn more</button>
      </div>
      </div>
      
      <div className="relative">
        <Image
          src="/gourmet4.jpg"
          alt="food"
          fill
          objectFit="contain"
        />
      </div>
    </section>
  );
}
