import Image from "next/image";
import Link from "next/link";
import React from "react";
import qualityImage from "../../public/images/quality.png";
import { Button } from "../ui/button";

const Clean = () => {
  return (
    <section className="mb-[150px]">
      <div className="max-w-[1440px] w-full mx-auto px-[20px] relative">
        <div className="relative bg-slate-700  pt-[100px] lg:pt-10 lg:pb-20 mt-36 pb-10  rounded-3xl flex flex-col items-center justify-center text-center gap-5 lg:justify-between md:flex-row md:mt-[18rem] px-5 mb-10 shadow-xl lg:mt-28 hover:shadow-[10px_10px_20px_#fa02024d,0_-10px_20px_#ff000080]">
          <div className="absolute -top-[150px] left-0 flex justify-center items-center w-full md:-top-[300px] lg:-top-[130px]">
            <Image
              src={qualityImage}
              alt="qualty"
              width={394}
              height={284}
              className=" md:w-[700px] md:h-[504px] lg:w-[800px] lg:h-[576px]"
            />
          </div>
          <div>
            <h1 className="text-[50px] lg:text-[90px] font-extrabold text-white">
              100%
            </h1>
            <p className="text-xl font-semibold text-white">Material quality</p>
          </div>
          <div className="z-10 space-y-5 md:space-y-2 md:text-start md:mt-14">
            <h1 className="text-[30px] font-semibold max-w-[400px] text-center  text-white md:text-start md:leading-7">
              Ecologically Clean Sleep Products
            </h1>
            <p className="text-base max-w-[400px] text-white font-semibold md:leading-5 md:w-[320px]">
              has been a company producing cotton fabrics for use all over the
              world for many years
            </p>
            <Link href="/">
              <button className="px-4 py-[6px] rounded-xl cursor-pointer bg-white mt-2">
                Collection
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clean;
