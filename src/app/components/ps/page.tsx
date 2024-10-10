import Image from "next/image";
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

      <div>
        <h4 className="text-3xl text-wrap flex justify-center mt-11 font-medium font-[Apple]">
          Pink Shoes/Boot Shoes
        </h4>
      </div>
      <hr />
      <div
        className="bg-[#ffced7] md:h-[130vh] h-screen flex space-x-2 space-y-7 flex-wrap  

justify-around"
      >
        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#ffe4ea] ml-1 mt-7 ">
          <Image src="/p1.png" alt="pink shoes" width="500" height="500" />
          <span>$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#ffe4ea] ml-1">
          <Image src="/p2.png" alt="pink shoes" width="500" height="500" />
          <span>$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#ffe4ea] ml-1">
          <Image src="/p3.png" alt="pink shoes" width="500" height="500" />
          <span>$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#ffe4ea] ml-1">
          <Image src="/p4.png" alt="pink shoes" width="500" height="500" />
          <span>$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#ffe4ea] ml-1">
          <Image src="/p5.png" alt="pink shoes" width="500" height="500" />
          <span>$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#ffe4ea] ml-1">
          <Image src="/p6.png" alt="pink shoes" width="500" height="500" />
          <span>$500</span>
        </div>
      </div>
    </main>
  );
}
