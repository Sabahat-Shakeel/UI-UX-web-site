import Image from "next/image";

export default function Hero2() {
  return (
    <div className="sm:flex py-20 flex-wrap min-h-screen min-w-full bg-cyan-900 ">
      <div className=" space-y-9 p-4">
        <h1 className="sm:text-6xl text-5xl text-wrap font-bold ">
          SMARTER ACCESSORIES
        </h1>
        <h3 className="sm:text-5xl text-4xl font-bold text-wrap text-stone-400">
          {" "}
          Let&apos;s Explore Unique Products
        </h3>
        <p className="text-lg text-stone-300 max-w-3xl text-wrap">
          Our Most Selling Products,best-selling product and we also recommend
          this product to our buyers because of its features and premium quality
          providing our customers with a stylish look and a premium sound
          experience.
        </p>
        <button className="portrait:hidden flex justify-center py-2  border-cyan-600 border w-40  bg-gradient-to-tr to-cyan-600 via-cyan-600 from-slate-950 animate-pulse">
          Shop now &#8594;
        </button>
      </div>
      <div className="flex-shrink-0 flex-row justify-center flex ">
        <Image src="/fone.png" alt="" width={400} height={300} />
      </div>
      <button className="sm:hidden flex justify-center py-2 border-cyan-600 border w-40  bg-gradient-to-tr to-cyan-600 via-cyan-600 from-slate-500 animate-pulse">
          Shop now &#8594;
        </button>
    </div>
  );
}
