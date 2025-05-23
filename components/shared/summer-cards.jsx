import Image from "next/image";
import React from "react";

const SummerCards = ({ text, image }) => {
  return (
    <div>
      <Image
        className="rounded-[15px]"
        src={image}
        width={250}
        height={187}
        alt="image"
      />
      <p className="my-4 text-black">{text}</p>
    </div>
  );
};

export default SummerCards;
