"use client";
import Image from "next/image";

import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${isOpen ? "overflow-hidden" : ""}`}>
      <div className="portrait:flex portrait:justify-between portrait:gap-x-44 portrait:items-center portrait:text-xs portrait:bg-gradient-to-tr to-slate-400 via-slate-500 from-slate-950 text-neutral-300 dark:neutral-500">
        <h1 className="text-lg font-bold ml-3 sm:hidden sticky top-0 z-30 first-letter:text-2xl first-letter:text-cyan-400 ">
          SABAHAT.
        </h1>
        <div className="md:hidden cursor-pointer p-3 " onClick={toggleMenu}>
          <div className="w-8 h-0.5 bg-neutral-500 mb-1"></div>
          <div className="w-8 h-0.5 bg-neutral-500 mb-1"></div>
          <div className="w-6 h-0.5 bg-neutral-500 "></div>
        </div>

        <div
          className={`fixed top-0 left-0 w-full h-full bg-gradient-to-tr to-slate-500 via-slate-900 from-slate-400 z-50 flex flex-col items-center justify-center  transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="absolute top-5 left-5">
            <button
              onClick={toggleMenu}
              className="text-gray text-2xl font-bold"
            >
              &#8592;
            </button>
          </div>

          <ul className="flex flex-col gap-8 mt-30 mx-30 text-stone-400 font-serif focus:text-white text-2xl">
            <li className="hover:scale-105">
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="hover:scale-105">
              <Link href="/project" onClick={toggleMenu}>
                Shop
              </Link>
            </li>
            <li className="hover:scale-105">
              <Link href="/skills" onClick={toggleMenu}>
                Products
              </Link>
            </li>
            <li className="hover:scale-105">
              <Link href="/about" onClick={toggleMenu}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <header className="portrait:hidden sticky top-0 z-20 flex justify-between py-2 bg-gradient-to-tr to-cyan-700 via-cyan-900 from-cyan-400">
        <h1 className="ml-16 text-lg font-bold portrait:hidden sticky top-0 z-30 first-letter:text-2xl first-letter:text-cyan-400">
          {" "}
          SABAHAT.
        </h1>

        <div className="flex justify-center gap-11 font-medium portrait:hidden">
          <Link className="mt-1" href="/feature">
            Home
          </Link>

          <select className="outline-none bg-transparent ">
            <option value="shop">Shop now</option>
            <option className=" text-black font-semibold" value="add cart">
              add to cart
            </option>
          </select>
          <select
            className="outline-none bg-transparent"
            defaultValue="products"
          >
            <option defaultValue="product">Items | Products</option>
            <option className=" text-black font-semibold  " value="Appliances">
            Home appliances
            </option>
            <option className=" text-black font-semibold  " value="Appliances">
              Shirt
            </option>
            <option className=" text-black font-semibold  " value="Appliances">
              Heels
            </option>
            <option className=" text-black font-semibold  " value="Appliances">
              Shoe
            </option>
            <option className=" text-black font-semibold  " value="Appliances">
              Headphone
            </option>
            <option className=" text-black font-semibold  " value="Appliances">
              Airpods
            </option>
          </select>

          <Link className="mt-1" href="/">
            Contact us
          </Link>
        </div>

        <div className="flex mr-5 gap-7  portrait:hidden">
          <Image
            src="/two.png"
            alt="login"
            width={35}
            height={25}
            className="hover:scale-125 duration-300 delay-150 cursor-pointer"
          />

          <Image
            src="/three.png"
            alt="cart"
            width={35}
            height={25}
            className="hover:scale-125 duration-300 delay-150 cursor-pointer "
          />
          <Image
            src="/one.png"
            alt="search"
            width={35}
            height={25}
            className="hover:scale-125 duration-300 delay-150 cursor-pointer "
          />

          {isOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg "
              onClick={toggleMenu}
            ></div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
