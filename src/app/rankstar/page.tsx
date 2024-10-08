import Image from "next/image";
export default function Rank() {
  return (
    <main className="portrait:hidden p-6 flex space-x-28   ">
      <div>
        <Image
          src="/rank.png"
          alt="rankstars"
          width="50"
          height="50"
          className="flex justify-center items-center"
        />
        <p className="font-bold text-xs">
          {" "}
          Sound booster{" "}
          <span className="portrait:grid portrait:grid-cols-1">
            headphone-blue shark{" "}
          </span>
        </p>
        <button className="text-xs hover:text-white hover:scale-105 duration-700 rounded-full mt-1 px-1 py-1 flex items-center space-x-1  font-bold bg-gradient-to-tr via-slate-950  from-slate-950  text-white ">
          <span>Buy now </span>
          <span className=" bg-red-500 rounded-full text-[0.6rem] px-2 py-0 text-white ">
            $100
          </span>
        </button>
      </div>

      <div>
        <Image
          src="/rank.png"
          alt="rankstars"
          width="50"
          height="50"
          className="flex justify-center items-center"
        />
        <p className="font-bold text-xs">
          {" "}
          Red boot shoes{" "}
          <span className="portrait:grid portrait:grid-cols-1">
            soft toe work boot{" "}
          </span>
        </p>
        <button className="text-xs hover:text-white hover:scale-105 duration-700 rounded-full mt-1 px-1 py-1 flex items-center space-x-1  font-bold bg-gradient-to-tr via-slate-950  from-slate-950  text-white ">
          <span>Buy now </span>
          <span className=" bg-red-500 rounded-full text-[0.6rem] px-2 py-0 text-white ">
            $100
          </span>
        </button>
      </div>

      <div className="sm:w-52  ">
        <Image
          src="/rank.png"
          alt="rankstars"
          width="50"
          height="50"
          className="flex justify-center items-center sm:mx-4"
        />
        <p className="font-bold text-xs mx-4">
          Prainted shirt{" "}
          <span className="portrait:grid portrait:grid-cols-1">
            {" "}
            soft-cotton{" "}
          </span>
        </p>
        <button className="text-xs hover:text-white hover:scale-105 duration-700 rounded-full ml-4 mt-1 px-1 py-1 flex items-center space-x-1  font-bold bg-gradient-to-tr via-slate-950  from-slate-950  text-white ">
          <span>Buy now </span>
          <span className=" bg-red-500 rounded-full text-[0.6rem] px-2 py-0 text-white ">
            $100
          </span>
        </button>
      </div>

      <div className="sm:space-x-7   ">
        <Image
          src="/rank.png"
          alt="rankstars"
          width="50"
          height="50"
          className="flex justify-center items-center sm:mx-8"
        />
        <p className="font-bold text-xs">
          Home appliances{" "}
          <span className="portrait:grid portrait:grid-cols-1">
            freezer | blender...{" "}
          </span>
        </p>
        <button className="text-xs hover:text-white hover:scale-105 duration-700 rounded-full mt-1 px-1 py-1 flex items-center space-x-1  font-bold bg-gradient-to-tr via-slate-950  from-slate-950  text-white ">
          <span>Buy now </span>
          <span className=" bg-red-500 rounded-full text-[0.6rem] px-2 py-0 text-white ">
            $100
          </span>
        </button>
      </div>
    </main>
  );
}
