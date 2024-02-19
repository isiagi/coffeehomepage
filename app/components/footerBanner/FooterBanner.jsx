import { SiCoffeescript } from "react-icons/si";

function FooterBanner() {
  return (
    <div
      className="bg-[url(/images/eight.jpg)] min-h-[90vh] bg-cover bg-center
     bg-black bg-opacity-50 bg-blend-overlay text-white flex justify-center items-center"
    >
      {/* create new div and put all code below in it */}
      <div>
        <div>
          <SiCoffeescript className="text-4xl mx-auto" />
          <p className="max-w-[500px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>

        <div className="text-center py-10">
          <h3 className="text-3xl">Store</h3>
          <p>12324, kampala Uganda</p>
          <p>12324, kampala Uganda</p>
        </div>

        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Your email address"
            className="p-3 border-[1px] bg-transparent"
          />
          <button className="text-slate-800 bg-white px-3">Send</button>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
