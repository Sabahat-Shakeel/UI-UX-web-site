import Image from "next/image";
import Link from "next/link";
const Ship = () => {
  return (
    <main className="flex gap-2 sm:mt-11 sm:justify-evenly py-11  ">
      <div className="portrait:max-w-[8rem] w-[10rem] h-[7rem] portrait:text-xs sm:w-60  border rounded-lg  border-slate-100 bg-slate-100 items-center pb-4 portrait:mt-20 flex justify-center">
        <Image src="/ship.png" alt="free shipping" width={100} height={100} />
      </div>

      <div className="portrait:max-w-[8rem] w-[10rem] h-[7rem] text-xs sm:w-60 border rounded-lg  border-slate-100  bg-slate-100 items-center pb-4 portrait:mt-20 flex justify-center">
        <Image
          src="/money.png"
          alt="icon money back"
          width={100}
          
          height={100}
        />
      </div>
      <div className="flex portrait:pt-20 hover:underline font-medium sm:text-lg portrait:ml-2 justify-end items-center">
       <Link href = "/components"> <p>
          Shop Now <span className="  "> &#8594;</span>{" "}
        </p> </Link>
      </div>
    </main>
  );
};
export default Ship;
