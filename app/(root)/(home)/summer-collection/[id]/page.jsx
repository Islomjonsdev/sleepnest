"use client";

import { summerCollectionData } from "@/api/summerCollectionData";
import { useParams } from "next/navigation";
import React from "react";

const SummerCollectionDynamicPage = () => {
  const params = useParams();
  const id = params?.id;

  const summerCollection = summerCollectionData?.find(
    (data) => data?.id.toString() === id
  );
  console.log(summerCollection);
  return <div>SummerCollectionDynamicPage</div>;
};

export default SummerCollectionDynamicPage;
