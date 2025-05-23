"use client";

import { summerCollectionData } from "@/api/summerCollectionData";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const SummerCollectionDynamicPage = () => {
  const params = useParams();
  const id = params?.id;

  const summerCollection = summerCollectionData?.find(
    (data) => data?.id.toString() === id
  );
  console.log(summerCollection);
  return (
    <div>
      <div className="max-w-[1440px] w-full mx-auto px-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[30px]">
          <div>
            <Image
              className="rounded-[25px]"
              src={summerCollection?.img}
              width={685}
              height={514}
              alt="productsImage"
            />
          </div>
          <div>Right</div>
        </div>
      </div>
    </div>
  );
};

export default SummerCollectionDynamicPage;
