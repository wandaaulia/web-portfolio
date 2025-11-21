"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import { Menus, textLogo } from "../data/navbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="top-0 z-50 text-gray-100 w-full text-center sticky bg-transparent py-2">
      <ul className="w-[80%] flex flex-row md:hidden justify-between mt-2 py-2 mx-auto px-4 items-center bg-linear-65 from-white/2 to-white/6 backdrop-blur-md rounded-xl ">
        <li className="bg-transparent">
          <Link href="/" className="bg-transparent">
            {textLogo}
          </Link>
        </li>

        <li
          className="w-5 h-5 bg-transparent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen && <Bars3Icon className="bg-transparent"> </Bars3Icon>}
          {isOpen && <XMarkIcon className="bg-transparent"> </XMarkIcon>}
        </li>
      </ul>
      <ul className="md:w-[70%] lg:w-[50%] mx-auto md:flex flex-row hidden justify-between mt-14 lg:mt-10 py-4  px-8 items-center bg-linear-65 from-white/2 to-white/6 backdrop-blur-md rounded-xl ">
        {Menus.map((menu, index) => (
          <Link href={menu.link} className="bg-transparent" key={index} download={menu.download ? true : false}>
            {menu.title}
          </Link>
        ))}
      </ul>

      {isOpen && (
        <ul className="gap-6  py-4 w-[90%] md:w-[70%] absolute left-0 right-0 lg:w-[50%] mx-auto flex flex-col md:hidden justify-between mt-0 items-center bg-linear-65 from-[#0d0e14]/90 to-[#0d0e14] rounded-bl-xl rounded-br-xl ">
         {Menus.map((menu, index) => (
          <Link href={menu.link} className="bg-transparent" key={index} download={menu.download ? true : false}>
            {menu.title}
          </Link>
        ))}
        </ul>
      )}
    </div>
  );
}
