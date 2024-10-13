import Footer from "@/app/footer/page";
import Reviews from "@/app/review/review";
import Image from "next/image";
import Link from "next/link";
export default function Ps() {
  return (
    <main className=" py-5 bg-[#e9ecef] h-screen ">
    <h4 className="underline underline-offset-4 flex justify-center text-wrap font-bold font text-black md:text-5xl font-[Col] text-3xl ">
      {" "}
   <Link href = "/shop">Exclusive Discount </Link>   
    </h4>
    <h4 className="text-stone-600 text-xl text-wrap font-[Col] flex justify-center mt-11 text-center">
      {" "}
      Visit This Amazing Products Will You Really Liked It
    </h4>

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
          <span >$500</span>
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
      <br/>
      <Reviews/>
      <br/>
      <Footer/>
    </main>
  );
}
