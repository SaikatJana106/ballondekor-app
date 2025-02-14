import React from "react";

const Options = () => {
    const options = [
        { src: "/birthdaycake.avif", text: "Birthday Decoration" },
        { src: "/love.avif", text: "Special Day" },
        { src: "/babyballon.webp", text: "Kids Decoration" },
        { src: "/baby shower.webp", text: "Baby Shower" },
        { src: "/aniversity.webp", text: "Anniversary Decoration" },
        { src: "/newborn.webp", text: "Newborn Welcome" },
    ];

    return (
        <div className="p-6">

            <h1 className="text-center text-4xl font-bold flex flex-col items-center my-6">
                <div className="flex items-center gap-4">
              
                    <span className="text-gray-900">Choose Your Decoration</span>
                    
                </div>
                <span className="text-gray-400 text-lg mt-2">Wide Range Collection</span>
            </h1>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {options.map((option, index) => (
                    <div key={index} className="flex flex-col items-center bg-white shadow-md rounded-xl p-3">
                        <img
                            className="  rounded-2xl object-cover hover:scale-105 transition-transform duration-300"
                            src={option.src}
                            alt={option.text}
                        />
                        <span className="text-center font-semibold text-sm md:text-base mt-2">{option.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Options;
