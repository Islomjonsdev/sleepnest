import React from "react";

const Title = ({ label, text, props }) => {
  return (
    <div className="text-center mb-[80px]" {...props}>
      <h1 className="my-[29px] lg:text-[35px] sm:text-[20px] font-bold text-black">
        {label}
      </h1>
      <p className="text-[16px] text-black font-normal">{text}</p>
    </div>
  );
};

export default Title;
