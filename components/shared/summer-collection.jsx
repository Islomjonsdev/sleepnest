import { summerCollectionData } from "@/api/summerCollectionData";
import React from "react";
import SummerCards from "./summer-cards";
import Title from "./title";

const SummerCollection = () => {
  return (
    <div className="pt-[200px]">
      <div className="max-w-[1440px] w-full mx-auto px-[20px]">
        <Title
          label="Summer Collection"
          text="Ecologically Clean Sleep Products"
        />

        <div>
          {summerCollectionData?.map(({id, text}) => (
            <SummerCards key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummerCollection;
