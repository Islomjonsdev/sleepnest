import Image from "next/image";
import React from "react";
import heroImage from "../../public/images/hero.png";

const Hero = () => {
  return (
    <section className="mb-[100px]">
      <div className="max-w-[1440px] w-full mx-auto px-[20px]">
        <div className="bg-[red] h-[408px] relative flex items-center justify-between pr-[20px]">
          <div>
            <Image
              className="absolute top-[-60px] left-[-130px]"
              src={heroImage}
              width={1090}
              height={638}
              alt="heoimage"
            />
          </div>

          <div className="text-end">
            <p className="text-[20px] text-[#7a5c33] font-bold leading-[20px]">
              Environmental
            </p>
            <p className="my-[30px] text-[35px] text-[#a17f4a] leading-[40px]">
              Clean Sleep
            </p>
            <h3 className="text-[#a17f4a] text-[55px] ">Products</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
