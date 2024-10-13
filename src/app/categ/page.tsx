import Image from "next/image";
import Link from "next/link";
export default function Cate() {
  return (
    <main className="gird grid-cols-2 sm:space-y-11 pt-16 min-h-screen portrait:flex-wrap ">
      <h3 className="text-3xl flex justify-center text-black font-medium portrait:text-xl">
        Shop by Categories
      </h3>
      <div className="ml-5 sm:flex sm:flex-1 justify-evenly portrait:grid portrait:grid-cols-2 ">
        <div className="max-w-[24rem] w-[15rem] h-[15rem] portrait:text-xs portrait:w-40 portrait:h-40   border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  items-center pb-4 portrait:mt-20">
          <Image
            src="/s1.png"
            alt="pink shoes"
            width={300}
            height={300}
            className="portrait:pb-2  portrait:w-44 sm:hover:scale-110 sm:duration-500 portrait:flex portrait:justify-center portrait:self-center"
          />
          <Link href="/components/ps">
            <span className="sm:mt-7 sm:ml-12 font-medium portrait:mx-5 hover:underline text-xl text-blue-800 underline underline-offset-2 hover:text-black ">
              Pink shoes
            </span>
          </Link>
        </div>

        <div className="max-w-[24rem] w-[15rem] h-[15rem] portrait:text-xs portrait:w-40 portrait:h-40  border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  items-center pb-4 portrait:mt-20">
          <Image
            src="/f5.png"
            alt="boy Tshirt"
            width={300}
            height={300}
            className="portrait:pb-2  portrait:w-44 sm:hover:scale-110 sm:duration-500 portrait:flex portrait:justify-center portrait:self-center"
          />
          <Link href="/components/ts ">
            <span className="sm:mt-7 sm:ml-6 font-medium  hover:underline text-xl text-blue-800 underline underline-offset-2 hover:text-black">
              Black-gray shirt
            </span>
          </Link>
        </div>

        <div className="portrait:hidden max-w-[24rem] w-[15rem] h-[15rem] portrait:text-xs portrait:w-40 portrait:h-40  border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  items-center pb-4 portrait:mt-20">
          <Image
            src="/f2.png"
            alt="red shoes"
            width={300}
            height={300}
            className="  portrait:w-44 sm:hover:scale-110 sm:duration-500 portrait:flex portrait:justify-center portrait:self-center"
          />
          <Link href="/components/rs ">
            <span className="sm:mt-7 sm:ml-12 font-medium hover:underline text-xl text-blue-800 underline underline-offset-2 hover:text-black">
              Red shoes
            </span>
          </Link>
        </div>
      </div>

      <div className="ml-5 sm:flex sm:flex-1  sm:justify-evenly portrait:grid portrait:grid-cols-2">
        <div className="max-w-[24rem] w-[15rem] h-[15rem] portrait:text-xs portrait:w-40 portrait:h-40  border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  items-center pb-4 portrait:mt-20">
          <Image
            src="/s4.png"
            alt="airpode"
            width={300}
            height={300}
            className=" portrait:pb-2 portrait:w-44 sm:hover:scale-110 sm:duration-500 portrait:flex portrait:justify-center portrait:self-center"
          />

          <Link href="/components/ap">
            <span className="sm:mt-11 sm:ml-1 font-medium hover:underline text-xl text-blue-800 underline underline-offset-2 hover:text-black">
              Airpods sound booster
            </span>
          </Link>
        </div>

        <div className="max-w-[24rem] w-[15rem] h-[15rem] portrait:text-xs portrait:w-40 portrait:h-40  border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  items-center pb-4 portrait:mt-20">
          <Image
            src="/hero2.png"
            alt="headphone"
            width={300}
            height={300}
            className=" portrait:pb-2 portrait:w-44 sm:hover:scale-110 sm:duration-500 portrait:flex portrait:justify-center portrait:self-center 
            select-none"
          />
          <Link href="/components/hp">
            <span className="sm:mt-7 sm:ml-16 font-medium portrait:mx-5 hover:underline text-xl  text-blue-800 underline underline-offset-2 hover:text-black ">
              Headphone
            </span>
          </Link>
        </div>

        <div className="max-w-[24rem] w-[15rem] h-[15rem] portrait:text-xs portrait:w-40 portrait:h-40  border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  items-center pb-4 portrait:mt-20">
          <Image
            src="/s6.png"
            alt="high heels"
            width={300}
            height={300}
            className="  portrait:w-44 sm:hover:scale-110 sm:duration-500 portrait:flex portrait:justify-center portrait:self-center portrait:pb-2"
          />
          <Link href="/components/bs">
            <span className="sm:mt-7 sm:ml-16 font-medium  portrait:mx-5 text-xl hover:underline text-blue-800 underline underline-offset-2 hover:text-black">
              High heels
            </span>
          </Link>
        </div>

        <div className="sm:hidden max-w-[24rem] w-[15rem] h-[15rem] portrait:text-xs portrait:w-40 portrait:h-40  border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  items-center pb-4 portrait:mt-20">
          <Image
            src="/f2.png"
            alt="red shoe"
            width={300}
            height={300}
            className="portrait:w-44 sm:hover:scale-110 sm:duration-500 portrait:flex portrait:justify-center portrait:self-center portrait:pb-2"
          />

          <Link href="/components/rs">
            <span className="sm:mt-7 sm:ml-8 font-medium portrait:mx-6 hover:underline text-xl text-blue-800 underline underline-offset-2 hover:text-black">
              Red shoes
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
