import Image from "next/image";
import Link from "next/link";
import React from "react";
import sleepNestLogo from "../../public/images/sleepnest_logo.png";
import { FcLike } from "react-icons/fc";
import { Menu } from "lucide-react";

const Header = () => {
  const navLinks = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/collection",
      label: "Collection",
    },
    {
      to: "/aboutus",
      label: "About Us",
    },
    {
      to: "/contacts",
      label: "Contacts",
    },
  ];
  return (
    <header className="bg-white py-[10px] bg-white py-[10px] shadow-md">
      <div className="max-w-[1400px] w-full mx-auto px-[20px]">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src={sleepNestLogo}
              alt="sleepNestLogo"
              width={180}
              height={55}
            />
          </Link>
          <div className="flex items-center gap-[15px]">
            <ul className="hidden lg:flex items-center gap-[30px] my-[16px]">
              {navLinks?.map(({ to, label }) => (
                <li className="py-[5px] px-[8px]" key={to}>
                  <Link href={to}>{label}</Link>
                </li>
              ))}
            </ul>
            <button className="hidden lg:block">
              <FcLike className="w-[20px] h-[20px]" />
            </button>
            <select name="" id="">
              <option value=""></option>
            </select>

            <button className="lg:hidden block">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
