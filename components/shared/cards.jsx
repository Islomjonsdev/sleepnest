import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Cards = ({ productImage, productText }) => {
  return (
    <div className="max-w-[256px] w-full relative">
      <Image className="rounded-[15px]" src={productImage} width={250} height={187} alt="productImage" />
      <p className="my-4 text-black">{productText}</p>
      <p className="absolute top-0 right-[20px]">Like</p>
    </div>
  );
};

export default Cards;
