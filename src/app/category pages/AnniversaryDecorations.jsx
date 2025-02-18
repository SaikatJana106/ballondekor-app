import React from 'react'
import { Star, Heart } from "lucide-react";
import Image from "next/image";
const AnniversaryDecorations = () => {
    const anniversaryDecorations = [
        {
            image: "/aniversity1.webp",
            newPrice: 1199,
            oldPrice: 1699,
            off: "29% OFF",
            ratings: 4.7,
            reviews: 150,
            topic: "Romantic Red Rose Anniversary Decor",
        },
        {
            image: "/aniversity2.webp",
            newPrice: 999,
            oldPrice: 1499,
            off: "33% OFF",
            ratings: 4.6,
            reviews: 130,
            topic: "Golden & White Elegant Anniversary Setup",
        },
        {
            image: "/aniversity3.webp",
            newPrice: 1399,
            oldPrice: 1999,
            off: "30% OFF",
            ratings: 4.8,
            reviews: 200,
            topic: "Candle Light Dinner Anniversary Decoration",
        },
        {
            image: "/aniversity4.webp",
            newPrice: 899,
            oldPrice: 1299,
            off: "31% OFF",
            ratings: 4.5,
            reviews: 120,
            topic: "Romantic Fairy Lights & Balloons Setup",
        },
        {
            image: "/aniversity1.webp",
            newPrice: 749,
            oldPrice: 1099,
            off: "32% OFF",
            ratings: 4.3,
            reviews: 98,
            topic: "Heart-Shaped Balloon & Floral Anniversary Decor",
        },
        {
            image: "/aniversity2.webp",
            newPrice: 649,
            oldPrice: 899,
            off: "28% OFF",
            ratings: 4.2,
            reviews: 85,
            topic: "Minimalist Pastel Theme Anniversary Decor",
        },
        {
            image: "/aniversity3.webp",
            newPrice: 1099,
            oldPrice: 1599,
            off: "31% OFF",
            ratings: 4.6,
            reviews: 140,
            topic: "Luxury Golden & Black Anniversary Setup",
        },
        {
            image: "/aniversity4.webp",
            newPrice: 799,
            oldPrice: 1199,
            off: "33% OFF",
            ratings: 4.4,
            reviews: 110,
            topic: "Outdoor Garden Anniversary Celebration Decor",
        },
    ];

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold max-md:text-xl">Anniversary Decorations</h1>
                <span className="text-blue-600 cursor-pointer hover:underline">View all</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {anniversaryDecorations.map((item, i) => (
                    <div key={i} className="border rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                        {/* Image Container */}
                        <div className="relative w-full h-[200px] md:h-[250px] lg:h-[280px] overflow-hidden rounded-lg border-2 border-gray-300">
                            <Image
                                src={item.image}
                                alt={item.topic}
                                loading="lazy"
                                fill
                                className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                            <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                                <Heart className="text-red-500 hover:scale-110 transition-transform" />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="p-3 text-center">
                            <span className="block text-sm md:text-md font-semibold">{item.topic}</span>
                            <div className="flex justify-center items-center gap-2 text-sm md:text-lg font-bold text-gray-900 mt-2">
                                <span>₹{item.newPrice}</span>
                                <span className="text-gray-500 line-through text-xs md:text-sm">₹{item.oldPrice}</span>
                            </div>
                            <span className="text-red-500 text-xs md:text-sm">{item.off}</span>

                            {/* Ratings and Reviews */}
                            <div className="flex justify-center items-center mt-2 text-gray-600 pb-5">
                                <Star className="text-yellow-500" size={16} />
                                <span className="ml-1 text-xs md:text-sm">{item.ratings} ({item.reviews})</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnniversaryDecorations
