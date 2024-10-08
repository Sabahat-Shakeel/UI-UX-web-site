import Image from "next/image";
export default function Cate() {
  return (
    <main className="gird grid-cols-2 sm:space-y-11 pt-16 min-h-screen portrait:space-x-7 ">
      <h3 className="text-3xl flex justify-center text-black font-medium portrait:text-xl">
        Shop by Categories
      </h3>
      <div className="ml-5 sm:flex sm:flex-1 justify-evenly portrait:grid portrait:grid-cols-2 ">
        <div className="max-w-[24rem] w-[15rem] h-[15rem] portrait:text-xs portrait:w-40 portrait:h-40   border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  items-center pb-4 portrait:mt-20">
          <Image
            src="/s1.png"
            alt="girls shoes"
            width={300}
            height={300}
            className="portrait:pb-2  portrait:w-44 sm:hover:scale-110 sm:duration-500 portrait:flex portrait:justify-center portrait:self-center"
          />
          <span className="sm:mt-7 sm:ml-12 font-medium portrait:mx-5 ">
            Girls pink shoes
          </span>
        </div>

        <div className="max-w-[24rem] w-[15rem] h-[15rem] portrait:text-xs portrait:w-40 portrait:h-40  border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  items-center pb-4 portrait:mt-20">
          <Image
            src="/s2.png"
            alt="boy shirt"
            width={300}
            height={300}
            className="portrait:pb-2  portrait:w-44 sm:hover:scale-110 sm:duration-500 portrait:flex portrait:justify-center portrait:self-center"
          />
          <span className="sm:mt-7 sm:ml-14 font-medium portrait:mx-5">
            Black-gray shirt
          </span>
        </div>

        <div className="portrait:hidden max-w-[24rem] w-[15rem] h-[15rem] portrait:text-xs portrait:w-40 portrait:h-40  border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  items-center pb-4 portrait:mt-20">
          <Image
            src="/s3.png"
            alt="bags"
            width={300}
            height={300}
            className="  portrait:w-44 sm:hover:scale-110 sm:duration-500 portrait:flex portrait:justify-center portrait:self-center"
          />
          <span className="sm:mt-7 sm:ml-12 font-medium ">
            Luggage suitcase
          </span>
        </div>
      </div>

      <div className="ml-5 sm:flex sm:flex-1  sm:justify-evenly portrait:grid portrait:grid-cols-2">
        <div className="max-w-[24rem] w-[15rem] h-[15rem] portrait:text-xs portrait:w-40 portrait:h-40  border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  items-center pb-4 portrait:mt-20">
          <Image
            src="/s4.png"
            alt="girls shoes"
            width={300}
            height={300}
            className=" portrait:pb-2 portrait:w-44 sm:hover:scale-110 sm:duration-500 portrait:flex portrait:justify-center portrait:self-center"
          />
          <span className="sm:mt-11  sm:ml-8 font-medium ">
            Airpods sound booster
          </span>
        </div>

        <div className="max-w-[24rem] w-[15rem] h-[15rem] portrait:text-xs portrait:w-40 portrait:h-40  border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  items-center pb-4 portrait:mt-20">
          <Image
            src="/s5.png"
            alt="girls shoes"
            width={300}
            height={300}
            className=" portrait:pb-2 portrait:w-44 sm:hover:scale-110 sm:duration-500 portrait:flex portrait:justify-center portrait:self-center 
            select-none"
          />
          <span className="sm:mt-7 sm:ml-10 font-medium portrait:mx-5 ">
            Washing-machine
          </span>
        </div>

        <div className="max-w-[24rem] w-[15rem] h-[15rem] portrait:text-xs portrait:w-40 portrait:h-40  border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  items-center pb-4 portrait:mt-20">
          <Image
            src="/s6.png"
            alt="girls shoes"
            width={300}
            height={300}
            className="  portrait:w-44 sm:hover:scale-110 sm:duration-500 portrait:flex portrait:justify-center portrait:self-center portrait:pb-2"
          />
          <span className="sm:mt-7 sm:ml-16 font-medium ">High heels</span>
        </div>

        <div className="sm:hidden max-w-[24rem] w-[15rem] h-[15rem] portrait:text-xs portrait:w-40 portrait:h-40  border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  items-center pb-4 portrait:mt-20">
          <Image
            src="/s3.png"
            alt="bags"
            width={300}
            height={300}
            className="portrait:w-44 sm:hover:scale-110 sm:duration-500 portrait:flex portrait:justify-center portrait:self-center portrait:pb-2"
          />
          <span className="sm:mt-7 sm:ml-8 font-medium portrait:mx-6">
            Luggage suitcase
          </span>
        </div>
      </div>
    </main>
  );
}
