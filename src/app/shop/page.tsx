import Image from "next/image";

import Reviews from "../review/review";
import Footer from "../footer/page";
export default function Ps() {
  return (
    <main className=" py-5 bg-[#e9ecef] h-screen ">
      <h4 className=" flex justify-center text-wrap font-bold font text-black text-5xl font-[Col] ">
        {" "}
        All Acessories
      </h4>
      <h4 className="text-stone-600 text-xl text-wrap font-[Col] flex justify-center mt-11 text-center">
        {" "}
        Visit This Amazing Products Will You Really Liked It
      </h4>
      <div className="flex justify-evenly"> <p className="text-xl text-stone-600  max-w-3xl text-wrap font-[Col] py-11 px-2 sm:ml-2 ">
        Our Most Selling Products and we also recommend this product to our
        buyers, its features and premium quality providing our customers with a
        stylish look and a premium sound experience.
      </p></div>
     
      <h1 className="w-40 ml-2 p-1 rounded-tr-2xl text-white font-bold animate-[changeBg_3s_infinite]">
        30 % Off Sale here
      </h1>

      <div>
        <h4 className="text-3xl text-wrap flex justify-center mt-11 font-medium font-[Apple]">
          Airpods Sound Booster
        </h4>
      </div>
      <hr />
      <div
        className="bg-[#a9d6e5] sm:h-[130vh] h-screen flex space-x-2 space-y-7 flex-wrap  

justify-around"
      >
        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1 mt-7 ">
          <Image src="/a1.png" alt="airpods" width="500" height="500" />
          <span className="ml-3">$150 OFF</span>{" "}
          <del className="ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1">
          <Image src="/a2.png" alt="airpods" width="500" height="500" />
          <span className="ml-3">$150 OFF</span>{" "}
          <del className="ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1">
          <Image src="/a3.png" alt="airpods" width="500" height="500" />
          <span className="ml-3">$150 OFF</span>{" "}
          <del className="ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1">
          <Image src="/a4.png" alt="airpods" width="500" height="500" />
          <span className="ml-3">$150 OFF</span>{" "}
          <del className="ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1">
          <Image src="/a5.png" alt="airpods" width="500" height="500" />
          <span className="ml-3">$150 OFF</span>{" "}
          <del className="ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1">
          <Image src="/a6.png" alt="airpods" width="500" height="500" />
          <span className="ml-3">$150 OFF</span>{" "}
          <del className="ml-5">$500</del>
        </div>
      </div>

      <div>
        <h4 className="text-3xl text-wrap flex justify-center mt-11 font-medium font-[Apple]">
          Black High Heel
        </h4>
      </div>
      <hr />
      <div
        className="bg-[#343a40] sm:h-[130vh] h-screen flex space-x-2 space-y-7 flex-wrap  

justify-around"
      >
        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1 mt-7 ">
          <Image src="/b1.png" alt="black high heel" width="500" height="500" />
          <span className="ml-3 text-gray-300">$200</span>{" "}
          <del className="text-gray-300 ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1">
          <Image src="/b2.png" alt="black high heel" width="500" height="500" />
          <span className="ml-3 text-gray-300">$200</span>{" "}
          <del className="text-gray-300 ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1">
          <Image src="/b3.png" alt="black high heel" width="500" height="500" />
          <span className="ml-3 text-gray-300">$200</span>{" "}
          <del className="text-gray-300 ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1">
          <Image src="/b4.png" alt="black high heel" width="500" height="500" />
          <span className="ml-3 text-gray-300">$200</span>{" "}
          <del className="text-gray-300 ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1">
          <Image src="/b5.png" alt="black high heel" width="500" height="500" />
          <span className="ml-3 text-gray-300">$200</span>{" "}
          <del className="text-gray-300 ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1">
          <Image src="/b6.png" alt="black high heel" width="500" height="500" />
          <span className="ml-3 text-gray-300">$200</span>{" "}
          <del className="text-gray-300 ml-5">$500</del>
        </div>
      </div>

      <div>
        <h4 className="text-3xl text-wrap flex justify-center mt-11 font-medium font-[Apple]">
          Headphone Sound Booster
        </h4>
      </div>
      <hr />
      <div
        className="bg-[#a9d6e5] sm:h-[130vh] h-screen flex space-x-2 space-y-7 flex-wrap  

justify-around"
      >
        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1 mt-7 ">
          <Image src="/h1.png" alt="headphones" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1">
          <Image src="/h2.png" alt="headphones" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1">
          <Image src="/h3.png" alt="headphones" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1">
          <Image src="/h4.png" alt="headphones" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1">
          <Image src="/h5.png" alt="headphones" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1">
          <Image src="/h6.png" alt="headphones" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>
      </div>

      <div>
        <h4 className="text-3xl text-wrap flex justify-center mt-11 font-medium font-[Apple]">
          Pink Shoes/Boot Shoes
        </h4>
      </div>
      <hr />
      <div
        className="bg-[#ffced7] sm:h-[130vh] h-screen flex space-x-2 space-y-7 flex-wrap  

justify-around"
      >
        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#ffe4ea] ml-1 mt-7 ">
          <Image src="/p1.png" alt="pink shoes" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#ffe4ea] ml-1">
          <Image src="/p2.png" alt="pink shoes" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#ffe4ea] ml-1">
          <Image src="/p3.png" alt="pink shoes" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#ffe4ea] ml-1">
          <Image src="/p4.png" alt="pink shoes" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#ffe4ea] ml-1">
          <Image src="/p5.png" alt="pink shoes" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#ffe4ea] ml-1">
          <Image src="/p6.png" alt="pink shoes" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>
      </div>

      <div>
        <h4 className="text-3xl text-wrap flex justify-center mt-11 font-medium font-[Apple]">
          Black/Gray TShirts
        </h4>
      </div>
      <hr />
      <div
        className="bg-[#343a40] sm:h-[130vh] h-screen flex space-x-2 space-y-7 flex-wrap  

justify-around"
      >
        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1 mt-7 ">
          <Image src="/t1.png" alt="black high heel" width="500" height="500" />
          <span className="ml-3 text-gray-300">$200</span>{" "}
          <del className="text-gray-300 ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1">
          <Image src="/t2.png" alt="black high heel" width="500" height="500" />
          <span className="ml-3 text-gray-300">$200</span>{" "}
          <del className="text-gray-300 ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1">
          <Image src="/t3.png" alt="black high heel" width="500" height="500" />
          <span className="ml-3 text-gray-300">$200</span>{" "}
          <del className="text-gray-300 ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1">
          <Image src="/t4.png" alt="black high heel" width="500" height="500" />
          <span className="ml-3 text-gray-300">$200</span>{" "}
          <del className="text-gray-300 ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1">
          <Image src="/t5.png" alt="black high heel" width="500" height="500" />
          <span className="ml-3 text-gray-300">$200</span>{" "}
          <del className="text-gray-300 ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1">
          <Image src="/t6.png" alt="black high heel" width="500" height="500" />
          <span className="ml-3 text-gray-300">$200</span>{" "}
          <del className="text-gray-300 ml-5">$500</del>
        </div>
      </div>

      <div>
        <h4 className="text-3xl text-wrap flex justify-center mt-11 font-medium font-[Apple]">
          Red Boot Shoes
        </h4>
      </div>
      <hr />
      <div
        className="bg-[#e63946] sm:h-[130vh] h-screen flex space-x-2 space-y-7 flex-wrap  

justify-around"
      >
        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#a4161a] ml-1 mt-7 ">
          <Image src="/r1.png" alt="red shoes" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#a4161a] ml-1">
          <Image src="/r2.png" alt="red shoes" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#a4161a] ml-1">
          <Image src="/r3.png" alt="red shoes" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#a4161a] ml-1">
          <Image src="/r4.png" alt="red shoes" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#a4161a] ml-1">
          <Image src="/r5.png" alt="red shoes" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#a4161a] ml-1">
          <Image src="/r6.png" alt="red shoes" width="500" height="500" />
          <span className="ml-3">$200</span> <del className=" ml-5">$500</del>
        </div>
      </div>
      <Reviews />
      <hr />
      <br />
      <Footer />
    </main>
  );
}
