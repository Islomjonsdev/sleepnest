import Image from "next/image";
import React from "react";

const CollectionCard = ({ img, title, category }) => {
  return (
    <div>
      <Image
        className="rounded-[15px]"
        src={img}
        alt="img"
        width={250}
        height={187}
      />
      <p className="my-4 text-black">{title}</p>
    </div>
  );
};

export default CollectionCard;
