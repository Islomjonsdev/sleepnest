"use client";

import { ProductCards } from "@/api/productCards";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const Products = () => {
  const params = useParams();
  const id = params?.id;
  const products = ProductCards?.find((item) => item?.id.toString() === id);

  const data = {
    material: "100% Cotton Flannel",
    pillowCase: "50x70 cm (2 pieces)",
    bedding: "260×280 cm (1 piece)",
    bed: "160x220 cm (2 pieces)",
    size: "	Custom Size",
    manufacturer: "Environmental Clean Sleep Product"
  }
  const { material, pillowCase, bedding, bed, size, manufacturer } = data
  return (
    <div>
      <div className="max-w-[1440px] w-full mx-auto px-[20px]">
        <div className="flex items-center  gap-[30px]">
          <div className="w-[50%]">
            <Image
              className="rounded-[25px]"
              src={products?.productImage}
              width={685}
              height={514}
              alt="productsImage"
            />
          </div>

          <div className="w-[50%]">
            <h1 className="my-[20px] text-black text-[24px] font-bold">{products?.productText}</h1>

            <table className="w-full border-collapse border border-[#ddd]">
              <tbody className="p-[15px]">
                <tr className="border border-[#ddd]">
                    <td className="p-[15px] border border-[#ddd]">Material:</td>
                    <td className="p-[15px] border-[#ddd]">{material}</td>
                </tr>
                <tr className="border border-[#ddd]">
                    <td className="p-[15px] border border-[#ddd]">Pillowcase:</td>
                    <td className="p-[15px] border border-[#ddd]">{pillowCase}</td>
                </tr>
                <tr className="border border-[#ddd]">
                    <td className="p-[15px] border border-[#ddd]">Bedding:</td>
                    <td className="p-[15px] border border-[#ddd]">{bedding}</td>
                </tr>
                <tr className="border border-[#ddd]">
                    <td className="p-[15px] border border-[#ddd]">Bed:</td>
                    <td className="p-[15px] bordr border-[#ddd]">{bed}</td>
                </tr>
                <tr className="border border-[#ddd]">
                    <td className="p-[15px] border border-[#ddd]">Size:</td>
                    <td className="p-[15px] bordr border-[#ddd]">{size}</td>
                </tr>
                <tr className="border border-[#ddd]">
                    <td className="p-[15px] border border-[#ddd]">Manufacturer:</td>
                    <td className="p-[15px] bordr border-[#ddd]">{manufacturer}</td>
                </tr>
              </tbody>
            </table>

            <p className="text-[#ff0000] text-4 my-4"><span>Category:</span> Winter Collection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
