import React from "react";
import { Star, Heart } from "lucide-react";
import Image from "next/image";

const BirthDayDecoration = () => {
    const items = [
        {
            image: "/birthdayroom1.webp",
            newPrice: 899,
            oldPrice: 1299,
            off: "31% OFF",
            ratings: 4.5,
            reviews: 120,
            topic: "Balloon Setup Black Golden Birthday Decorator",
        },
        {
            image: "/birthdayroom4.webp",
            newPrice: 749,
            oldPrice: 999,
            off: "25% OFF",
            ratings: 4.2,
            reviews: 95,
            topic: "Romantic Red Rose Anniversary Decoration",
        },
        {
            image: "/birthdayroom20.webp",
            newPrice: 1199,
            oldPrice: 1699,
            off: "29% OFF",
            ratings: 4.7,
            reviews: 150,
            topic: "Elegant White & Silver Party Decor",
        },
        {
            image: "/birthdayroom30.webp",
            newPrice: 549,
            oldPrice: 799,
            off: "31% OFF",
            ratings: 4.0,
            reviews: 78,
            topic: "Birthday LED Light Banner Setup",
        },
        {
            image: "/birthdayroom50.webp",
            newPrice: 1399,
            oldPrice: 1999,
            off: "30% OFF",
            ratings: 4.8,
            reviews: 200,
            topic: "Wedding Floral Decoration",
        },
        {
            image: "/birthdayroom1.webp",
            newPrice: 899,
            oldPrice: 1299,
            off: "31% OFF",
            ratings: 4.3,
            reviews: 110,
            topic: "Baby Shower Pink & Blue Balloon Decor",
        },
        {
            image: "/birthdayroom30.webp",
            newPrice: 649,
            oldPrice: 899,
            off: "28% OFF",
            ratings: 4.1,
            reviews: 85,
            topic: "Housewarming Theme Decoration",
        },
        {
            image: "/birthdayroom4.webp",
            newPrice: 999,
            oldPrice: 1499,
            off: "33% OFF",
            ratings: 4.6,
            reviews: 130,
            topic: "Festive Diwali Home Decor Setup",
        },
    ];

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold max-md:text-xl">Birthday Decoration</h1>
                <span className="text-blue-600 cursor-pointer hover:underline">View all</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((item, i) => (
                    <div key={i} className="border rounded-lg bg-white">

                        <div className="relative overflow-hidden rounded-lg border-2 border-gray-300">
                            <Image
                                src={item.image}
                                alt={item.topic}
                                width={250}
                                height={250}
                                className="object-cover w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                            <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                                <Heart className="text-red-500 hover:scale-110 transition-transform" />
                            </div>
                        </div>

                        
                        <div className="mt-4 text-center">
                            <span className="block text-md font-semibold">{item.topic}</span>
                            <div className="flex justify-center items-center gap-2 text-lg font-bold text-gray-900 mt-2">
                                <span>₹{item.newPrice}</span>
                                <span className="text-gray-500 line-through text-sm">₹{item.oldPrice}</span>
                            </div>
                            <span className="text-red-500 text-sm">{item.off}</span>
                
                            <div className="flex justify-center items-center mt-2 text-gray-600 pb-5">
                                <Star className="text-yellow-500" size={16} />
                                <span className="ml-1 text-sm">{item.ratings} ({item.reviews})</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BirthDayDecoration;
