import React from 'react'
import { Star, Heart } from "lucide-react";
import Image from "next/image";
const BacheloretteDecorations = () => {
    const bacheloretteDecorations = [
        {
            image: "/bachelorparty1.webp",
            newPrice: 1299,
            oldPrice: 1799,
            off: "28% OFF",
            ratings: 4.7,
            reviews: 160,
            topic: "Pink & Gold Bachelorette Party Decor",
        },
        {
            image: "/bachelorparty2.webp",
            newPrice: 999,
            oldPrice: 1499,
            off: "33% OFF",
            ratings: 4.6,
            reviews: 135,
            topic: "Bride-to-Be Balloon & Light Setup",
        },
        {
            image: "/bachelorparty3.webp",
            newPrice: 1499,
            oldPrice: 2099,
            off: "29% OFF",
            ratings: 4.8,
            reviews: 180,
            topic: "Glamorous Rose Gold Bachelorette Theme",
        },
        {
            image: "/bachelorparty4.webp",
            newPrice: 899,
            oldPrice: 1299,
            off: "31% OFF",
            ratings: 4.5,
            reviews: 125,
            topic: "Fun & Funky Bachelorette Party Decoration",
        },
        {
            image: "/bachelorparty1.webp",
            newPrice: 799,
            oldPrice: 1199,
            off: "33% OFF",
            ratings: 4.4,
            reviews: 110,
            topic: "Tropical Beach Theme Bachelorette Decor",
        },
        {
            image: "/bachelorparty2.webp",
            newPrice: 699,
            oldPrice: 999,
            off: "30% OFF",
            ratings: 4.3,
            reviews: 95,
            topic: "Elegant White & Silver Bachelorette Setup",
        },
        {
            image: "/bachelorparty3.webp",
            newPrice: 1199,
            oldPrice: 1699,
            off: "29% OFF",
            ratings: 4.7,
            reviews: 150,
            topic: "Luxury Black & Gold VIP Party Theme",
        },
        {
            image: "/bachelorparty4.webp",
            newPrice: 999,
            oldPrice: 1499,
            off: "33% OFF",
            ratings: 4.6,
            reviews: 130,
            topic: "Night Club Theme Bachelorette Celebration",
        },
    ];

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold max-md:text-xl">Bachelorette Decorations</h1>
                <span className="text-blue-600 cursor-pointer hover:underline">View all</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {bacheloretteDecorations.map((item, i) => (
                    <div key={i} className="border rounded-lg bg-white">

                        <div className="relative overflow-hidden rounded-lg border-2 border-gray-300">
                            <Image
                                src={item.image}
                                alt={item.topic}
                                loading="lazy"
                                width={250}
                                height={250}
                                className="object-cover w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                            <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                                <Heart className="text-red-500 hover:scale-110 transition-transform" />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="mt-4 text-center">
                            <span className="block text-md font-semibold">{item.topic}</span>
                            <div className="flex justify-center items-center gap-2 text-lg font-bold text-gray-900 mt-2">
                                <span>₹{item.newPrice}</span>
                                <span className="text-gray-500 line-through text-sm">₹{item.oldPrice}</span>
                            </div>
                            <span className="text-red-500 text-sm">{item.off}</span>
                            {/* Ratings and Reviews */}
                            <div className="flex justify-center items-center mt-2 text-gray-600 pb-5">
                                <Star className="text-yellow-500" size={16} />
                                <span className="ml-1 text-sm">{item.ratings} ({item.reviews})</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BacheloretteDecorations
