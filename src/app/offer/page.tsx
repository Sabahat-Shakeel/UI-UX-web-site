import Link from "next/link";

const Offer = () => {
  return (
    <header className=" portrait:flex portrait:justify-center portrait:py-1 portrait:text-xs font-semibold  bg-black text-white">
      <div className="flex  justify-center sm:gap-11 portrait:gap-2 ">
        <h2 className="sm:px-11">30 % OFF SummerSale - Airpods</h2>
        <em className="underline underline-offset-4 flex ">
        <Link href = "/shop">Shop now &#8594; <span className=""> </span>{" "}</Link>  
        </em>
      </div>
    </header>
  );
};
export default Offer;
