import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerLogo from "../../public/images/footerLogo.png";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <footer className="pt-[150px] mb-[50px]">
      <div className="max-w-[1440px] w-full mx-auto px-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[80px]">
          <div>
            <Link href={"/"}>
              <Image
                src={footerLogo}
                width={300}
                height={91}
                alt="footerLogo"
              />
            </Link>
            <p className="pt-[30px] pb-4 text-[#908d8ddd] text-4">
              Ecological Clean Sleep Products is a company that produces cotton
              fabrics for use all over the world for many years.
            </p>
          </div>
          <ul className="my-4 flex gap-[80px]">
            <li>
              <h3 className="text-black text-6 font-bold my-[20px]">menu</h3>
              <ul>
                <li className="mt-[10px]">
                  <Link
                    className="text-4 text-[#4e4e4e] hover:text-[red] transition-colors duration-300 ease-in-out"
                    href={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link
                    className="text-4 text-[#4e4e4e] hover:text-[red] transition-colors duration-300 ease-in-out"
                    href={"/"}
                  >
                    Collection
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link
                    className="text-4 text-[#4e4e4e] hover:text-[red] transition-colors duration-300 ease-in-out"
                    href={"/"}
                  >
                    About Us
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link
                    className="text-4 text-[#4e4e4e] hover:text-[red] transition-colors duration-300 ease-in-out"
                    href={"/"}
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-black text-6 font-bold my-[20px]">
                Contacts
              </h3>
              <ul>
                <li className="mt-[10px]">
                  <Link href={"/"}>
                    <h3 className="text-4 text-[#4e4e4e] hover:text-[red] transition-colors duration-300 ease-in-out">
                      Bukhara, st. Alpomish 80
                    </h3>
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <Link href={"/"}>
                    <h3 className="text-4 text-[#4e4e4e] hover:text-[red] transition-colors duration-300 ease-in-out">
                      Email: sleepnest@gamil.com
                    </h3>
                  </Link>
                </li>
                <li className="mt-[10px]">
                  <a href="tel:998940337212">
                    <h3 className="text-4 text-[#4e4e4e] hover:text-[red] transition-colors duration-300 ease-in-out">
                      +998 94 033 72 12
                    </h3>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="mt-[10px]">
            <h3 className="text-black text-6 font-bold my-[20px]">
              Subscribe to our email
            </h3>

            <form className="relative">
              <input
              placeholder="Subscribe to our email"
                className="p-[20px] border border-[#555353] rounded-[20px] w-full relative"
                type="text"
              />
              <button className="absolute right-[5px] top-[5px] p-[15px] rounded-[20px] bg-[#ff0000] text-white cursor-pointer hover:bg-black transition-colors duration-300 ease-in-out">
                Subscribe
              </button>

              <p className="mt-[40px] mb-[14px] text-[#4e4e4e] text-[14px]">Select at least one list.</p>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
