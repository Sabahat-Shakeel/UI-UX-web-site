import Image from "next/image";
export default function Home() {
  return (
    <main className=" sm:h-screen portrait:h-[45rem] bg-gradient-to-t from-slate-300 to-slate-500  via-slate-950 ">
      <section className="sm:flex gap-6  items-center  portrait:grid">
        <div className="flex-1  z-20  ">
          <h1 className=" sm:ml-6  font-bold font-[Apple] sm:text-6xl text-center sm:leading-[60px] portrait:text-4xl portrait:mt-3 ">
            SMARTER ACCESSORIES{" "}
          </h1>
          <h3 className="sm:ml-11 font-bold font-[Apple sm:text-4xl text-center sm:leading-[60px] portrait:text-3xl portrait:mt-2">
            Let&apos;s Explore Unique Products
          </h3>
          <p className="sm:text-base sm:ml-20 text-gray-300 mt-2 portrait:flex portrait:text-base  portrait:text-justify portrait:p-4 ">
            Our Most Selling Products,best-selling product and we also recommend
            this product to our buyers because of its features and premium
            quality providing our customers with a stylish look and a premium
            sound experience.
          </p>

          <button className="  portrait:hidden sm:ml-20 bg-gradient-to-tl via-slate-950 animate-pulse from-slate-600  hover:animate-none hover:bg-slate-900  text-white py-2 mt-5 sm:px-11 outline-none rounded-sm">
            Shop now &#8594;
          </button>
        </div>

        <div className="flex-1 z-10  ">
          <Image
            width={500}
            height={500}
            src="/hero2.png"
            alt="headphone"
            className="sm:mt-11 transition-transform duration-100  portrait:flex portrait:w-72  portrait:ml-16 "
          />
          <div className="sm:hidden portrait:flex portrait:justify-center ">
            <button className=" sm:hidden portrait:px-5 bg-gradient-to-tl rounded-sm via-slate-950 animate-pulse from-slate-600 text-white py-2 mt-1 ">
              Shop now &#8594;
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
