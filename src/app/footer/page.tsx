import Link from "next/link";
export default function Footer() {
  return (
    <div className=" min-h-screen bg-gradient-to-r to-slate-800 via-slate-950 from-slate-800 pt-14">
      <footer className="sm:rounded-tl-full mt-11 portrait:pt-16 sm:rounded-br-full bg-gradient-to-t to-slate-900 via-cyan-800 from-black portrait:rounded-tl-[8.5rem] portrait:rounded-tr-[8.5rem] text-sm  portrait:min-h-scree w-full h-[80vh] portrait:h-screen border border-slate-950">
        <p className="portrait:hidden flex sm:justify-end  text-center pt-1 text-gray-300 sm:mr-4 mb-2">
          Supported payment systems in our store
        </p>

        <h1 className="flex justify-center pt-5 portrait:pt-16 sm:ml-8 font-medium text-cyan-600 portrait:text-2xl">
          Sabahat shakeel online shop
        </h1>

        <p className="sm:hidden flex sm:justify-end portrait:justify-center portrait:text-2xl text-center  portrait:mt-8 text-gray-300 sm:mr-4 mb-2">
          Supported payment systems in our store
        </p>
        <div>
          <ul className="flex justify-center gap-5 portrait:text-2xl portrait:mt-11 sm:ml-8">
            <li className="text-stone-400 mt-1 ">
              <Link href="">Home</Link>
            </li>
            <li className="text-stone-400 mt-1 ">
              <Link href="">Contact us</Link>
            </li>
          </ul>
          <div className="flex ml-16 portrait:ml-5 font-light  sm:justify-center items-start portrait:text-xl ">
            <ul className="items-start  sm:pt-11">
              <li className="text-stone-200 mt-1 font-medium underline portrait:text-2xl pt-11">
                <Link href="">Products</Link>
              </li>
              <li className="text-stone-400 mt-2 ml-2 hover:underline">
                <Link href="">Shoes</Link>
              </li>
              <li className="text-stone-400 mt-2 ml-2 hover:underline">
                <Link href="">Shirt</Link>
              </li>
              <li className="text-stone-400 mt-2 ml-2 hover:underline">
                <Link href="">Heels</Link>
              </li>
              <li className="text-stone-400 mt-2 ml-2 hover:underline">
                <Link href="">Head phone</Link>
              </li>
              <li className="text-stone-400 mt-2 ml-2 hover:underline">
                <Link href="">Home appliances</Link>
              </li>
              <li className="text-stone-400 mt-2 ml-2 hover:underline">
                <Link href="">Washing machine</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="flex justify-start portrait:mt-7 sm:m-11 sm:pt-6 text-gray-200 portrait:text-base ">
          ©Copyright 2024 | All right reserved
        </p>
      </footer>
    </div>
  );
}
