"use client";

import useOffset from "@/app/hooks/useOffset";
import React from "react";

function Nav() {
  const [offSet] = useOffset();
  return (
    <nav
      className={`${
        offSet < 40
          ? "flex justify-between min-h-[11vh] items-center px-5 text-white fixed w-full"
          : " bg-[#BE9C79] z-10 flex justify-between min-h-[11vh] items-center px-5 text-white fixed w-full"
      }`}
    >
      <h1 className="font-semibold text-2xl">Coffee</h1>

      <ul className="flex gap-3 font-semibold tet-lg">
        <li>Home</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;

// same styles, let a different background color on one
