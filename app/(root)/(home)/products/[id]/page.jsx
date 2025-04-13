"use client";

import { ProductCards } from "@/api/productCards";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const Products = () => {
  const params = useParams();
  const id = params?.id;
  console.log(id);

  const products = ProductCards?.find((item) => item?.id.toString() === id);
  return (
    <div>
      <div className="max-w-[1440px] w-full mx-auto px-[20px]">
        <div className="flex gap-[30px]">
          <div>
            <Image
              className="rounded-[25px]"
              src={products?.productImage}
              width={685}
              height={514}
              alt="productsImage"
            />
          </div>

          <div>
            <h1>{products?.productText}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
