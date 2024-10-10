import Image from "next/image";
export default function Ps() {
  return (
    <main className=" py-5 bg-gradient-to-br to-[#fdfcdc] via-[#e9d8a6] from-[#f4d58d] h-screen ">
      <h1 className=" flex justify-center text-wrap font-bold text-orange-400 text-5xl font-[Noto]">
        {" "}
        All Acessories
      </h1>
      <h1 className="text-stone-600 text-3xl text-wrap font-[Col] flex justify-center mt-11 text-center">
        {" "}
        Visit This Amazing Products Will You Really Liked it
      </h1>

      <div>
        <h4 className="text-3xl text-wrap flex justify-center mt-11 font-medium font-[Apple]">
          Black High Heel
        </h4>
      </div>
      <hr />
      <div
        className="bg-[#343a40] md:h-[130vh] h-screen flex space-x-2 space-y-7 flex-wrap  

justify-around"
      >
        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1 mt-7 ">
          <Image src="/b1.png" alt="black high heel" width="500" height="500" />
          <span className="text-gray-300">$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1">
          <Image src="/b2.png" alt="black high heel" width="500" height="500" />
          <span className="text-gray-300">$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1">
          <Image src="/b3.png" alt="black high heel" width="500" height="500" />
          <span className="text-gray-300">$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1">
          <Image src="/b4.png" alt="black high heel" width="500" height="500" />
          <span className="text-gray-300">$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1">
          <Image src="/b5.png" alt="black high heel" width="500" height="500" />
          <span className="text-gray-300">$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-black ml-1">
          <Image src="/b6.png" alt="black high heel" width="500" height="500" />
          <span className="text-gray-300">$500</span>
        </div>
      </div>
    </main>
  );
}
