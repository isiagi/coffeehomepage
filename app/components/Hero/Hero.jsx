import React from "react";
import { SiCoffeescript } from "react-icons/si";
import { CiCoffeeBean } from "react-icons/ci";

function Hero() {
  return (
    <div
      className="bg-[url('/images/eight.jpg')] min-h-screen bg-cover bg-center bg-no-repeat bg-fixed
     bg-black bg-opacity-50 bg-blend-overlay flex items-center md:justify-end justify-center text-white"
    >
      <div className="flex flex-col items-center">
        <div>
          <SiCoffeescript className="text-7xl mx-auto" />
        </div>

        <h2 className="text-6xl my-3 font-semibold text-center">
          COFFEE HEAVEN
        </h2>

        <CiCoffeeBean className="text-4xl text-[#BE9C79] mx-auto" />

        <p className="max-w-[500px] text-lg md:block hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>

        <button className="border-2 p-4 hover:bg-[#BE9C79] hover:border-[#BE9C79] md:mt-5 mt-2">
          SHOP HERE
        </button>
      </div>
    </div>
  );
}

export default Hero;

// let import the images folder

// add dark overlay
