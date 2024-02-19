import React from "react";
import HeaderBanner from "../headerBanner/HeaderBanner";

import { SiCoffeescript } from "react-icons/si";
import { GiCoffeeBeans } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { GiSlicedBread } from "react-icons/gi";

function Offer() {
  return (
    <div>
      <HeaderBanner title={"OUR DELICIOUS OFFER"} />

      <div className="grid grid-cols-fluid px-5 gap-3 pb-20">
        <div className="text-center">
          <SiCoffeescript className="mx-auto text-4xl text-[#BE9C79]" />

          <h3 className="text-xl text-slate-800 my-3">COFFEE TO GO</h3>

          <p className="text-slate-600">
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </p>
        </div>

        <div className="text-center">
          <GiCoffeeBeans className="mx-auto text-4xl text-[#BE9C79]" />

          <h3 className="text-xl text-slate-800 my-3">Type of Coffee</h3>

          <p className="text-slate-600">
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </p>
        </div>

        <div className="text-center">
          <GiSlicedBread className="mx-auto text-4xl text-[#BE9C79]" />

          <h3 className="text-xl text-slate-800 my-3">BEAN VARIETIES</h3>

          <p className="text-slate-600">
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </p>
        </div>

        <div className="text-center">
          <SiBuymeacoffee className="mx-auto text-4xl text-[#BE9C79]" />

          <h3 className="text-xl text-slate-800 my-3">COFFEE & PASTRY</h3>

          <p className="text-slate-600">
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offer;
