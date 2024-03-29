import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About us"} />
        <div className="max-w-md text-gray-500 mx-auto mt-4 flex flex-col gap-4">
        <p className="mt-4 "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        cursus ligula et aliquet iaculis. Etiam cursus elementum dui, quis
        sodales metus pulvinar bibendum. Mauris tincidunt ullamcorper neque.</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        cursus ligula et aliquet iaculis. Etiam cursus elementum dui, quis
        sodales metus pulvinar bibendum. Mauris tincidunt ullamcorper neque.</p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader={'Dont hesitate'} mainHeader={'Contact us'}/>
      <div className="mt-8">
      <a className="text-4xl underline text-gray-500" href="tel:+447123456789">+447-123-456-789</a>
      </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
       &copy; 2024 All rights reserved
      </footer>
    </>
  );
}
