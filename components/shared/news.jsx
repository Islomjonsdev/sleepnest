import { newsData } from "@/api/newsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Title from "./title";

const News = () => {
  return (
    <section>
      <div className="max-w-[1440px] w-full mx-auto px-[20px]">
        <Title label="News" text="Ecologically Clean Sleep Products" />

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {newsData?.map(
            ({
              id,
              newsImg,
              newsDate,
              newsAdmin,
              newsTitle,
              newsDescription,
            }) => (
              <li key={id}>
                <Link href={`/news/${id}`}>
                  <Image
                    className="rounded-[20px]"
                    src={newsImg}
                    width={400}
                    height={224}
                    alt="newsImg"
                  />
                  <div className="flex items-center gap-[30px]  my-[12px]">
                    <time className="text-black text-4">{newsDate}</time>
                    <p className="text-[#616060] text-[12px] text-medium">{newsAdmin}</p>
                  </div>
                  <h3 className="my-[18px] text-black text-[18px] font-bold">{newsTitle}</h3>
                  <p className="my-4 text-[#5b5a5a] text-4">{newsDescription}</p>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default News;
