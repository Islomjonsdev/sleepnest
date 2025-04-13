import { ProductCards } from "@/api/productCards";
import Link from "next/link";
import React from "react";
import Cards from "./cards";

const Products = () => {
  return (
    <section>
      <div className="max-w-[1440px] w-full mx-auto px-[20px]">
        <div className="flex flex-wrap gap-[30px]">
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
