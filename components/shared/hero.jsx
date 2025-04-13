import Image from "next/image";
import React from "react";
import heroImage from "../../public/images/hero.png";

const Hero = () => {
  return (
    <section className="mb-[100px]">
      <div className="max-w-[1440px] w-full mx-auto px-[20px]">
        <div className="relative rounded-xl animate-colorCycle pb-[50px] md:pb-[200px] lg:-[300px] mb-10 bg-[#ecdabf] pt-[70px]">
          <Image
            src={heroImage}
            alt="hero"
            className="absolute w-[400px] lg:-left-40 lg:-top-10 lg:w-[1300px] md:-left-32 md:-top-12 md:w-[1000px]"
          />
          <div className="flex flex-col pt-8 font-bold pr-7 text-end">
            <h1 className="text-xl md:text-2xl z-10 text-[#7a5c33] leading-5">
              Environmental
            </h1>
            <h1 className="text-[#a17f4a] z-10 text-[35px] md:text-[45] lg:text-[55px]">
              Clean Sleep
            </h1>
            <h1 className="text-[#a17f4a] z-10 text-[45px] md:text-[55] lg:text-[95px]">
              Products
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
