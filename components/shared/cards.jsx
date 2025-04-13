import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cards = ({ productImage, productText }) => {
  return (
    <div className="max-w-[256px] w-full">
      <Image className="rounded-[15px]" src={productImage} width={250} height={187} alt="productImage" />
      <p className="my-4 text-black">{productText}</p>
    </div>
  );
};

export default Cards;
