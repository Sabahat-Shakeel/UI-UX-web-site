import Image from "next/image";
export default function Ps() {
  return (
    <main className=" py-5 bg-gradient-to-br to-[#fdfcdc] via-[#e9d8a6] from-[#f4d58d] h-screen ">
      <h1 className=" flex justify-center text-wrap font-bold text-orange-400 text-5xl font-[Noto]">
        {" "}
        All Acessories
      </h1>
      <h1 className="text-gray-400 text-3xl text-wrap font-[Col] flex justify-center mt-11 ml-1">
        {" "}
        Visit This Amazing Products Will You Really Liked it
      </h1>

      <div>
        <h4 className="text-3xl text-wrap flex justify-center mt-11 font-medium font-[Apple]">
         Airpods Sound Booster
        </h4>
      </div>
      <hr />
      <div
        className="bg-[#a9d6e5] h-[130vh] flex space-x-2 space-y-7 flex-wrap  

justify-around"
      >
        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1 mt-7 ">
          <Image src="/a1.png" alt="airpods" width="500" height="500" />
          <span>$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1">
          <Image src="/a2.png" alt="airpods" width="500" height="500" />
          <span>$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1">
          <Image src="/a3.png" alt="airpods" width="500" height="500" />
          <span>$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1">
          <Image src="/a4.png" alt="airpods" width="500" height="500" />
          <span>$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1">
          <Image src="/a5.png" alt="airpods" width="500" height="500" />
          <span>$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#62b6cb] ml-1">
          <Image src="/a6.png" alt="airpods" width="500" height="500" />
          <span>$500</span>
        </div>
      </div>
    </main>
  );
}
