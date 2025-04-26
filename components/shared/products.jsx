import { ProductCards } from "@/api/productCards";
import Link from "next/link";
import React from "react";
import Cards from "./cards";
import Title from "./title";

const Products = () => {
  return (
    <section className="pb-[50px]">
      <div className="max-w-[1440px] w-full mx-auto px-[20px]">
        <div className="text-center">
          <Title label="Winter Collection" text=" Ecologically Clean Sleep Products" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
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
