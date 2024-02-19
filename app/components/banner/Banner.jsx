import React from "react";

function Banner() {
  return (
    <div className="bg-[url('/images/one.jpg')] flex justify-between flex-wrap items-center w-full">
      <div className="px-5 py-10 w-full flex justify-between items-center">
        <h3 className="text-xl">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
        </h3>

        <button className="p-4 border-2 border-[#BE9C79] bg-[#BE9C79] text-white hover:border-black hover:border-2">
          SHOP HERE
        </button>
      </div>
    </div>
  );
}

export default Banner;
