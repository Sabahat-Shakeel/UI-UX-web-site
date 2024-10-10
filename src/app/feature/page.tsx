import Image from "next/image";
import Rank from "../rankstar/page";
export default function Features() {
  return (
    <div className=" via-slate-900 from-slate-900 sm:mt-4 h-screen sm:ml-3 sm:mr-3 flex-wrap">
      <hr />

      <div className="font-serif font-thin">
        <h3 className="sm:ml-5 sm:text-4xl portrait:ml-2 portrait:text-3xl text-black"
       >
          Features
        </h3>
      </div>
      <div className="sm:flex portrait:grid portrait:grid-cols-2 portrait:gap-7 portrait:pt-6 portrait:ml-1 portrait:mr-3 sm:gap-20 sm:pt-11 "    data-aos="fade-down">
        <div className="sm:max-w-[24rem] sm:w-[20rem] sm:h-[25rem]  portrait:text-xs portrait:w-44 portrait:h-64 border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  grid items-center pb-4">
          <span className="ml-1 bg-red-700 rounded-md w-10 flex text-white justify-center">
            HOT
          </span>
          <span className=" bg-red-700 mt-1 rounded-tr-2xl w-20 flex text-white justify-evenly font-bold">
            10 %{" "}
          </span>
          <Image
            src="/hero2.png"
            alt="headphone"
            width={220}
            height={200}
            className="sm:ml-4 portrait:ml-5 portrait:w-36 "  
          />
          <div className="flex justify-center ">
            <button className="  border border-slate-600 hover:bg-red-700 hover:border-transparent focus:bg-red-700 py-1 sm:w-44 flex justify-center  rounded-lg bg-gray-950  text-white portrait:px-8 outline-none">
              Add to cart
            </button>
          </div>

          <div className="sm:hidden mt-16 ml-3">
            <Image
              src="/rank.png"
              alt="rankstars"
              width={50}
              height={50}
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
        </div>

        <div className="max-w-[24rem] w-[20rem] h-[25rem]  portrait:text-xs portrait:w-44 portrait:h-64 border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  grid items-center pb-4">
          <span className="ml-1 bg-red-700 rounded-md w-10 flex text-white justify-center">
            HOT
          </span>
          <span className=" bg-red-700 mt-1 rounded-tr-2xl w-20 flex text-white justify-evenly font-bold">
            10 %{" "}
          </span>
          <Image
            src="/f2.png"
            alt=""
            width={227}
            height={200}
            className="sm:ml-4 portrait:ml-5 portrait:w-36  "
          />
          <div className="flex justify-center ">
            <button className="  border border-slate-600 hover:bg-red-700 hover:border-transparent focus:bg-red-700 py-1 sm:w-44 flex justify-center  rounded-lg bg-gray-950  text-white portrait:px-8 outline-none">
              Add to cart
            </button>
          </div>

          <div className="sm:hidden mt-16 ml-3 ">
            <Image
              src="/rank.png"
              alt="rankstars"
              width={50}
              height={50}
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
        </div>

        <div className="max-w-[24rem] w-[20rem] h-[25rem] portrait:text-xs portrait:w-44 portrait:h-64  border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  grid items-center pb-4 portrait:mt-20">
          <span className="ml-1 bg-red-700 rounded-md w-10 flex text-white justify-center">
            HOT
          </span>
          <span className=" bg-red-700 mt-1 rounded-tr-2xl w-20 flex text-white justify-evenly font-bold">
            10 %{" "}
          </span>
          <Image
            src="/f5.png"
            alt="Tshirt"
            width={250}
            height={200}
            className="sm:ml-3  portrait:ml-8 portrait:w-32"
          />
          <div className="flex justify-center mt-9 flex-col ">
            <button className="  border border-slate-600 hover:bg-red-700 hover:border-transparent focus:bg-red-700 py-1 sm:w-44 flex justify-center sm:ml-8 rounded-lg bg-gray-950 portrait:w-32 portrait:ml-5 text-white  outline-none">
              Add to cart
            </button>
          </div>

          <div className="sm:hidden portrait:mt-11 ml-3  ">
            <Image
              src="/rank.png"
              alt="rankstars"
              width={50}
              height={50}
              className="flex justify-center items-center mx-4"
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
        </div>

        <div className="max-w-[24rem] w-[20rem] h-[25rem]  portrait:text-xs portrait:w-44 portrait:h-64 border-2 rounded-lg border-slate-700 bg-gradient-to-tr shadow-inner to-slate-500 from-slate-950  grid items-center pb-4 portrait:mt-20">
          <span className="ml-1 bg-red-700 rounded-md w-10 flex text-white justify-center">
            HOT
          </span>
          <span className=" bg-red-700 mt-1 rounded-tr-2xl w-20 flex text-white justify-evenly font-bold">
            10 %{" "}
          </span>
          <Image
            src="/f4.png"
            alt=""
            width={230}
            height={200}
            className="sm:ml-2 sm:pb-3 portrait:ml-4 portrait:w-40 "
          />
          <div className="flex justify-center sm:mt-9 portrait:mt-6 flex-col ">
            <button className="  border border-slate-600 hover:bg-red-700 hover:border-transparent focus:bg-red-700 py-1 sm:w-44 flex justify-center sm:ml-8 rounded-lg bg-gray-950 portrait:w-32 portrait:ml-5 text-white  outline-none">
              Add to cart
            </button>
          </div>

          <div className="sm:hidden mt-11 ml-3 ">
            <Image
              src="/rank.png"
              alt="rankstars"
              width={50}
              height={50}
              className="flex justify-center items-center "
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
        </div>
      </div>

      <Rank />
    </div>
  );
}
