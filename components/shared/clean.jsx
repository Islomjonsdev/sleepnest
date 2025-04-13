import React from "react";
import { Button } from "../ui/button";

const Clean = () => {
  return (
    <section className="mb-[150px]">
      <div className="max-w-[1440px] w-full mx-auto px-[20px] relative">
        <div className="bg-[#464351] p-[70px] flex justify-between rounded-[30px]">
          <div>
            <h2 className="text-[90px] font-bold mb-[20px] text-white">100%</h2>
            <p className="text-white text-[20px]">Material quality</p>
          </div>

          <div className="max-w-[500px] w-full">
            <h4 className="text-[20px] font-semibold mb-[20px] text-white">"Ecologically Clean Sleep Products"</h4>
            <p className="text-4 font-normal mb-[20px] text-white">
              has been a company producing cotton fabrics for use all over the
              world for many years
            </p>
            <Button variant={"collection"}>Collection</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clean;
