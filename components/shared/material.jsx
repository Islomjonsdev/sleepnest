import Image from "next/image";
import React from "react";
import materialImage from "../../public/images/material.png";

const Material = () => {
  return (
    <section className="pt-[100px]">
      <div className="max-w-[1440px] w-full mx-auto px-[20px]">
        <div className="bg-[#236f48]">
          <div>
            <Image
              src={materialImage}
              alt="materialImage"
              width={394}
              height={284}
              className="md:w-[700px] md:h-[504px] lg:w-[800px] lg:h-[576px]"
            />
          </div>

          <div>
              <h1>100%</h1>
              <p>Material quality</p>
          </div>

          <div>
          <h1 className="text-[30px] font-semibold text-center  text-white md:text-start md:leading-7">
              "Ecologically Clean Sleep Products"
            </h1>
            <p className="text-base text-white font-semibold md:leading-5">
              has been a company producing cotton fabrics for use all over the
              world for many years
            </p>
            <button className="px-4 py-[6px] rounded-xl cursor-pointer bg-white mt-2">
              Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Material;
