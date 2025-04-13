import { ProductCards } from "@/api/productCards";
import Link from "next/link";
import React from "react";
import Cards from "./cards";

const Products = () => {
  return (
    <section className="pb-[50px]">
      <div className="max-w-[1440px] w-full mx-auto px-[20px]">
        <div className="text-center mb-[80px]">
          <h2 className="my-[29px] text-[35px] font-bold text-black">Winter Collection</h2>
          <p className="text-[16px] text-black font-normal">Ecologically Clean Sleep Products</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-[30px]">
          {ProductCards?.map(({ id, productImage, productText }) => (
            <Link href={`/products/${id}`} key={id}>
              <Cards productImage={productImage} productText={productText} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
