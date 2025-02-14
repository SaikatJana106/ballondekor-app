import React from "react";
import Image from "next/image";

const Specialday = () => {
  const gifts = [
    { src: "/aniversitygift.avif", text: "Anniversary Decoration" },
    { src: "/birthdaygift.avif", text: "Birthday Decoration" },
    { src: "/giftsforher.avif", text: "Gift for Her" },
    { src: "/giftesforhim.avif", text: "Gift for Him" },
  ];

  return (
    <div className="px-4 py-6">
      <h1 className="text-center font-semibold text-3xl md:text-4xl mb-2">Decorate for your special persion</h1>
      <h3 className="text-gray-600 text-center mb-6">Surprise Your Loved Ones</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {gifts.map((gift, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="overflow-hidden  ">
              <Image
                src={gift.src}
                alt={gift.text}
                loading="lazy"
                width={200}
                height={200}
                className="object-cover w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <span className="px-4 py-2 border-2 border-gray-400 rounded-b-2xl bg-white  text-center text-sm font-semibold w-[218px] max-xl:w-full min-h-[50px] flex items-center justify-center">
              {gift.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialday;
