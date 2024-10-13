import Link from "next/link";

export default function Para() {
  return (
    <div>
      <div className="flex-wrap border border-slate-800 bg-cyan-900 p-11 mt-28 m-2 sm:text-2xl text-lg text-[#fdfcdc] text-pretty ">
        <p>
          <em className="text-white">
            {" "}
            Sabahat&apos;s Elegant E-Commerce Web Application Designer,
          </em>{" "}
          E-Commerce Website Application Building Platforms For Online Stores In
          2024 .{" "}
        </p>
        <button className="py-2 px-6 border mt-11 rounded-lg bg-yellow-500 text-black border-yellow-500 active:bg-black active:text-white hover:duration-500 ">
          <Link href="https://github.com/Sabahat-Shakeel"> GitHub </Link>
        </button>
      </div>
    </div>
  );
}
