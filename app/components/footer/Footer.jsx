import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex items-center py-10 bg-[#121212] text-white">
      {/* create a div and move code below in it */}
      <div className="flex justify-between items-center w-full px-5">
        <h1>Coffee</h1>

        <ul className="flex gap-3">
          <li>Home</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>

        <ul className="flex gap-3">
          <li>
            <BsTwitterX />
          </li>
          <li>
            <FaFacebookF />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
