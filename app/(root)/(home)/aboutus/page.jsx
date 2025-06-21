import Image from "next/image";
import React from "react";
import aboutUsImage from "../../../../public/images/aboutus.png";

const AboutUs = () => {
  const aboutUsText = [
    {
      text: "Our company, which produces cotton fabrics and ecological bags, has been supplying cotton fabrics to the global market for many years.",
    },
    {
      text: "Our company started its activity 17 years ago and has been gaining the trust of our customers.",
    },
    {
      text: "The main goal of our company is to create high-quality, durable and environmentally friendly products.",
    },
    {
      text: "Manufacturing processes are fully environmentally friendly and environmentally friendly.",
    },
    {
      text: "Using modern technologies, we are able to produce various cotton products at a high level.",
    },
    {
      text: "Also, we act as the official representative of DongJu weaving equipment in Uzbekistan.",
    },
    {
      text: "Every year, more than 80 types of products are produced in our factory, as a result of which the company ensures high quality and stable production.",
    },
    {
      text: "More than 50 looms are operating in our enterprise based on modern technologies.",
    },
    {
      text: "In our production processes, we ensure the production of only high-quality and environmentally safe products.",
    },
    {
      text: "According to the requirements of our customers, the production of eco-friendly and modern design bags has been launched.",
    },
    {
      text: "Our company is always happy to provide quality products and high level of service to its customers.",
    },
  ];
  return (
    <div>
      <div className="max-w-[1440px] w-full mx-auto px-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-4">
          <div>
            <h2 className="my-[29.5px] font-bold text-[35px] text-black">
              Ecologically Clean Sleep Products
            </h2>
            {aboutUsText?.map(({ text }) => (
              <p
                className="my-4 text-[#696969] text-4 w-full md:max-w-[500px] w-full"
                key={text}
              >
                {text}
              </p>
            ))}
          </div>
          <div>
            <Image
              className="rounded-[20px] shadow-[10px_10px_20px_#0000004d,_0_-10px_20px_#00000080]"
              src={aboutUsImage}
              alt="aboutUsImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
