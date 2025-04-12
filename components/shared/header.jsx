"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import sleepNestLogo from "../../public/images/sleepnest_logo.png";
import { FcLike } from "react-icons/fc";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Modal from "./modal";

const Header = () => {
  const pathName = usePathname();
  const [openModal, setOpenModal] = useState(false);
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

  const option = ["Eng", "Ru", "Uz"];
  return (
    <>
      <header className="bg-white py-[10px] bg-white py-[10px] shadow-md mb-[25px]">
        <div className="max-w-[1440px] w-full mx-auto px-[20px]">
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
                {navLinks?.map((links) => {
                  const { to, label } = links;
                  const isActive =
                    to === "/" ? pathName === "/" : pathName.startsWith(to);
                  return (
                    <li className="py-[5px] px-[8px]" key={to}>
                      <Link
                        className={
                          isActive
                            ? "text-[#a17f4a] font-semibold text-[20px]"
                            : "text-[#0000098] text-[20px] font-light"
                        }
                        href={to}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <button className="hidden lg:block">
                <FcLike className="w-[20px] h-[20px]" />
              </button>
              <select>
                {option?.map((option, id) => (
                  <option key={id}>{option}</option>
                ))}
              </select>

              <button
                className="lg:hidden block"
                onClick={() => setOpenModal(true)}
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </header>
      {openModal && (
        <Modal close={() => setOpenModal(false)}>
          <div className="bg-white h-[100%]">
            <div className="flex items-right justify-end pt-[30px] pr-[20px]">
              <button onClick={() => setOpenModal(false)}>
                <X />
              </button>
            </div>

            <div className="flex flex-col items-center gap-[30px]">
              <ul className="flex flex-col items-center gap-[30px] my-[16px]">
                {navLinks?.map((links) => {
                  const { to, label } = links;
                  const isActive =
                    to === "/" ? pathName === "/" : pathName.startsWith(to);
                  return (
                    <li
                      className="py-[5px] px-[8px]"
                      onClick={() => setOpenModal(false)}
                      key={to}
                    >
                      <Link
                        className={
                          isActive
                            ? "text-[#000] font-semibold text-[20px]"
                            : "text-[#000] text-[20px] font-light"
                        }
                        href={to}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <button className="block">
                <FcLike className="w-[20px] h-[20px]" />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Header;
