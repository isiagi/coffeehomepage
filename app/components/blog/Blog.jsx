import React from "react";
import HeaderBanner from "../headerBanner/HeaderBanner";
import Image from "next/image";

// bring in data and map through.
const imgArray = [
  {
    id: 1,
    img: "/images/four.jpg",
    title: "PREP TECHNIQUES",
  },
  {
    id: 2,
    img: "/images/five.jpg",
    title: "EAST PRESS",
  },
  {
    id: 3,
    img: "/images/eight.jpg",
    title: "WEST IBRIK",
  },
];

function Blog() {
  return (
    <div className="bg-[url('/images/one.jpg')]">
      <HeaderBanner title={"THE COFFEE HERALD"} />

      <div className="grid grid-cols-fluid gap-3 px-5 pb-20">
        {imgArray.map(({ id, img, title }) => (
          <div key={id}>
            <div>
              <Image
                src={img}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            </div>

            <h3 className="text-xl hover:text-[#BE9C79] py-2 text-slate-800">
              {title}
            </h3>

            <p className="text-slate-600">
              Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue.
              Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus
              maecenas tempus,
            </p>

            <p className="font-semibold hover:text-[#BE9C79] hover:pl-2 py-1 cursor-pointer">
              - Learn More
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
