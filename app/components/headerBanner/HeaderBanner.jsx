import { CiCoffeeBean } from "react-icons/ci";

function HeaderBanner({ title }) {
  return (
    <div className="text-center pt-24 pb-20 text-slate-800">
      <h3 className="text-3xl">{title}</h3>
      <CiCoffeeBean className="mx-auto text-4xl my-3 text-[#BE9C79]" />
      <p className="max-w-[500px] mx-auto text-slate-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
    </div>
  );
}

export default HeaderBanner;

// make header banner reusable
