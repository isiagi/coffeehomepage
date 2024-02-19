import React from "react";
import HeaderBanner from "../headerBanner/HeaderBanner";
import Image from "next/image";

// bring in the data to map
const galleyArray = [
  {
    id: 1,
    img: "/images/two.jpg",
    title: "Coffee Express",
  },
  {
    id: 2,
    img: "/images/three.jpg",
    title: "Coffee Cup",
  },
  {
    id: 3,
    img: "/images/six.jpg",
    title: "Expressior",
  },
  {
    id: 4,
    img: "/images/seven.jpg",
    title: "Expressior",
  },
  {
    id: 5,
    img: "/images/nine.jpg",
    title: "Expressior",
  },
  {
    id: 6,
    img: "/images/four.jpg",
    title: "Expressior",
  },
];

function Gallery() {
  return (
    <div>
      <HeaderBanner title={"OUR SWEET GALLERY"} />

      <div className="grid grid-cols-fluid gap-5 pb-20">
        {galleyArray.map(({ id, img, title }) => (
          <div key={id} className="relative group">
            {/* image div below */}
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

            {/* overlay div below */}

            <div
              className="bg-black text-white absolute bottom-0 right-0 left-0 h-full 
          bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-[1]"
            >
              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p>coffee / cup</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
