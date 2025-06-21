"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { collectionData } from "@/api/collectionData";
import Link from "next/link";
import CollectionCard from "@/components/shared/collectionCard";

const Collection = () => {
  const [selectCategories, setSelectCategories] = useState(
    "Barcha kategoriyalar"
  );
  const [searchCategories, setSearchCategories] = useState("");
  const btnCategiries = [
    "Barcha kategoriyalar",
    "Winter Collection",
    "Autumn Collection",
    "Summer Collection",
  ];

  const filterData =
    selectCategories === "Barcha kategoriyalar"
      ? collectionData
      : collectionData?.filter((item) => item?.category === selectCategories);

  const searchByTitle = filterData?.filter((searchTitle) =>
    searchTitle?.title?.toLowerCase()?.includes(searchCategories?.toLowerCase())
  );
  return (
    <div className="mt-[50px]">
      <div className="max-w-[1440px] mx-auto px-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[50px]">
          <div className="md:col-span-1">
            <div className="relative">
              <Input
                className="relative"
                type="search"
                placeholder="Searching for..."
                onChange={(e) => setSearchCategories(e.target.value)}
              />
              <Button className="absolute top-0 right-[15px] top-[10px] rounded-full bg-[red] w-[46px] h-[46px] cursor-pointer">
                <Search />
              </Button>
            </div>
            <div className="mt-[70px] mb-[40px]">
              <h1 className="text-black text-[24px] font-bold">Collection</h1>
            </div>
            <div className="flex flex-col items-start">
              {btnCategiries?.map((btn) => (
                <button
                  className={`mb-4 cursor-pointer ${
                    selectCategories === btn ? "text-[#a17f4a]" : ""
                  }`}
                  key={btn}
                  onClick={() => setSelectCategories(btn)}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-4 gap-4">
            {searchByTitle?.map(({ id, img, title, category }) => (
              <Link key={id} href={"/"}>
                <CollectionCard img={img} title={title} category={category} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
