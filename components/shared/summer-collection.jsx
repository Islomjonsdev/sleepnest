import { summerCollectionData } from "@/api/summerCollectionData";
import Link from "next/link";
import React from "react";
import SummerCards from "./summer-cards";
import Title from "./title";

const SummerCollection = () => {
  return (
    <section className="pt-[200px] pb-[50px]">
      <div className="max-w-[1440px] w-full mx-auto px-[20px]">
        <Title
          label="Summer Collection"
          text="Ecologically Clean Sleep Products"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {summerCollectionData?.map(({ id, text, img }) => (
            <Link href={`/summer-collection/${id}`} key={id}>
              <SummerCards text={text} image={img} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerCollection;
