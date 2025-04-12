import { serviceData } from "@/api/service";
import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <section className="mb-[100px]">
      <div className='max-w-[1440px] w-full mx-auto px-[20px]'>
        <ul className="flex flex-wrap items-center justify-between my-4 md:flex justify-center">
          {serviceData?.map(({ id, image, title, text }) => (
            <li className="flex flex-col lg:flex-row items-center gap-[30px]" key={id}>
              <Image src={image} alt="image" width={50} height={50} />
              <div className="w-[250px] text-center lg:text-start">
                <h4 className="my-[14px] text-4 text-black font-bold">{title}</h4>
                <p className="my-[14px] text-[#aaa] font-[14px] font-normal">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;