import Image from "next/image";
import React from "react";

const SecondCards = ({ text, image }) => {
  return (
    <div className="max-w-[256px] w-full">
        <Image className="rounded-[15px]" src={image} width={250} height={187} alt="image"/>
        <p className="my-4 text-black">{text}</p>
    </div>
  );
};

export default SecondCards;
