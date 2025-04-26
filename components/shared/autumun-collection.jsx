import { SecondProductData } from "@/api/secondProductData";
import Link from "next/link";
import React from "react";
import SecondCards from "./secondCards";
import Title from "./title";

const AutumunCollection = () => {
  return (
    <section className="pt-[150px]">
      <div className="max-w-[1440px] w-full w-full mx-auto px-[20px]">
        <Title
          label="Autumn Collection"
          text="Ecologically Clean Sleep Products"
        />

        <ul>
          {SecondProductData?.map(({ id, text, image }) => (
            <Link href={`/autumun-collection/${id}`} key={id}>
              <SecondCards text={text} image={image} />
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AutumunCollection;
