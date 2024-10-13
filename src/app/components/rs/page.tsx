import Footer from "@/app/footer/page";
import Reviews from "@/app/review/review";
import Image from "next/image";
import Link from "next/link";
export default function Ps() {
  return (
    <main className=" py-5 bg-[#e9ecef] h-screen ">
    <h4 className="underline underline-offset-4 flex justify-center text-wrap font-bold font text-black text-5xl font-[Col] ">
      {" "}
   <Link href = "/shop">Exclusive Discount </Link>   
    </h4>
    <h4 className="text-stone-600 text-xl text-wrap font-[Col] flex justify-center mt-11 text-center">
      {" "}
      Visit This Amazing Products Will You Really Liked It
    </h4>
      <div>
        <h4 className="text-3xl text-wrap flex justify-center mt-11 font-medium font-[Apple]">
          Red Boot Shoes
        </h4>
      </div>
      <hr />
      <div
        className="bg-[#e63946] md:h-[130vh] h-screen flex space-x-2 space-y-7 flex-wrap  

justify-around"
      >
        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#a4161a] ml-1 mt-7 ">
          <Image src="/r1.png" alt="red shoes" width="500" height="500" />
          <span>$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#a4161a] ml-1">
          <Image src="/r2.png" alt="red shoes" width="500" height="500" />
          <span>$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#a4161a] ml-1">
          <Image src="/r3.png" alt="red shoes" width="500" height="500" />
          <span>$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#a4161a] ml-1">
          <Image src="/r4.png" alt="red shoes" width="500" height="500" />
          <span>$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#a4161a] ml-1">
          <Image src="/r5.png" alt="red shoes" width="500" height="500" />
          <span>$500</span>
        </div>

        <div className="w-40 h-40 sm:w-80 sm:h-80 border border-pink-300  rounded-xl bg-[#a4161a] ml-1">
          <Image src="/r6.png" alt="red shoes" width="500" height="500" />
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
