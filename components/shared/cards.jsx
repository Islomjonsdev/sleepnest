import Image from "next/image";
import React from "react";
import { FcLike } from "react-icons/fc";

const Cards = ({ productImage, productText }) => {
  return (
    <div className="max-w-[256px] w-full relative">
      <Image className="rounded-[15px]" src={productImage} width={250} height={187} alt="productImage" />
      <p className="my-4 text-black">{productText}</p>
      <FcLike className="absolute top-0 right-[20px] z-10"  />
    </div>
  );
};

export default Cards;
