import React from "react";
const Specialday = () => {
  const gifts = [
    { src: "/aniversitygift.avif", text: "Anniversary Decoration" },
    { src: "/birthdaygift.avif", text: "Birthday Decoration" },
    { src: "/giftsforher.avif", text: "Gift for Her" },
    { src: "/giftesforhim.avif", text: "Gift for Him" },
  ];

  return (
    <div className="px-4 py-6">
      <h1 className="text-center font-semibold text-[4vw] md:text-[2.2vw] mb-2">Decorate for your special persion</h1>
      <h3 className="text-gray-600 text-[1vw] text-center mb-6">Surprise Your Loved Ones</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center items-center">
        {gifts.map((gift, index) => (
          <div key={index} className="flex flex-col items-center w-fit">
            <div className="overflow-hidden  ">
              <img
                src={gift.src}
                alt={gift.text}
                loading="lazy"
                className="object-cover object-center w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <span className="px-4 py-2 border-2 border-gray-400 rounded-b-2xl bg-white  text-center text-[1vw] max-md:text-[3vw] font-semibold w-full h-auto flex items-center justify-center">
              {gift.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialday;
