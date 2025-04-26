import { SecondProductData } from "@/api/secondProductData";
import Link from "next/link";
import React from "react";
import SecondCards from "./secondCards";
import Title from "./title";

const AutumunCollection = () => {
  return (
    <section className="pt-[150px] pb-[50px]">
      <div className="max-w-[1440px] w-full mx-auto px-[20px]">
        <Title
          label="Autumn Collection"
          text="Ecologically Clean Sleep Products"
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {SecondProductData?.map(({ id, text, image }) => (
            <Link href={`/autumun-collection/${id}`} key={id}>
              <SecondCards text={text} image={image} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutumunCollection;
