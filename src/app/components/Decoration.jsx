import React from "react";
import Image from "next/image";

const Decoration = () => {
    return (
        <div className="bg-[rgb(190,64,86)] py-8 px-4">
            <h1 className="text-center text-3xl font-bold text-slate-100 relative pb-6">Choose Your Theme</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {["/theme1.webp", "/theme2.webp", "/theme3.webp", "/theme4.webp", "/theme5.webp", "/theme6.webp"].map((src, index) => (
                    <div key={index} className="rounded-xl overflow-hidden shadow-md">
                        <Image
                            src={src}
                            alt={`Theme ${index + 1}`}
                            loading="lazy"
                            width={200}
                            height={200}
                            className="object-cover w-full h-auto hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Decoration;
