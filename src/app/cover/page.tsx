import Image from "next/image";
import Link from "next/link";
export default function Cover() {
  return (
    <main className="mt-16 sm:mt-24 pb-11 sm:grid sm:grid-cols-2  bg-gradient-to-tr to-cyan-400 via-slate-950 from-cyan-900 items-center sm:rounded-tr-full">
      <div className=" ">
        <Link href="/shop">
          {" "}
          <Image
            src="/cover.png"
            alt="airpods"
            width={700}
            height={700}
            className="flex justify-center "
          />
        </Link>
      </div>
      <Link href="/shop">
        <div className="sm:flex portrait:py-11 sm:justify-start sm:ml-11 sm:items-center bg-slate-900 px-1 rounded-sm portrait:ml-11 ">
          <h1 className="text-6xl pt-11 font-medium portrait:text-3xl ">
            Hurry up! 30 % OFF
          </h1>
          <span className=" text-white font-black portrait:text-3xl">
            Airpods Sound Booster
          </span>
        </div>
      </Link>
    </main>
  );
}
