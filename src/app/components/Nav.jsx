'use client';
import React, { useState } from "react";
import { Map, PencilLine, Search, Gift, ShoppingBag, UsersRound, Menu, X } from "lucide-react";
import Image from "next/image";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md md:px-10">
            {/* Logo */}
            <div>
                <Image width={180} height={100} src="/logomain.webp" alt="Logo" />
            </div>

            {/* Search & Delivery Inputs */}
            <div className="flex-1 flex items-center gap-x-4 mx-4">
                {/* Delivery Input */}
                <div className="relative flex items-center flex-1">
                    <input
                        type="text"
                        placeholder="Delivery to?"
                        className="w-full p-2 pl-10 border border-gray-300 rounded-md bg-gradient-to-r from-blue-200 to-blue-50 text-gray-900 outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <PencilLine className="absolute left-3 text-gray-500" size={20} />
                </div>

                {/* Search Input */}
                <div className="relative flex items-center flex-1">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-full p-2 pl-10 border border-gray-300 rounded-md text-gray-900 outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <Search className="absolute left-3 text-gray-500" size={20} />
                </div>
            </div>

            {/* Hamburger Menu for small screens */}
            <div className="md:hidden">
                {menuOpen ? (
                    <X size={30} className="cursor-pointer" onClick={() => setMenuOpen(false)} />
                ) : (
                    <Menu size={30} className="cursor-pointer" onClick={() => setMenuOpen(true)} />
                )}
            </div>

            {/* Icons Section */}
            <div className={`absolute top-16 left-0 w-full bg-white shadow-md md:static md:flex md:items-center md:gap-x-6 md:shadow-none md:w-auto ${menuOpen ? "block" : "hidden"}`}>
                <div className="flex flex-col md:flex-row items-center gap-y-4 md:gap-y-0 md:gap-x-6 py-4 md:py-0">
                    <div className="flex items-center gap-x-2 cursor-pointer">
                        <Map className="text-gray-700 hover:text-blue-500" size={28} />
                        <span>Track Order</span>
                    </div>
                    <div className="flex items-center gap-x-2 cursor-pointer">
                        <Gift className="text-gray-700 hover:text-blue-500" size={28} />
                        <span>Gift</span>
                    </div>
                    <div className="flex items-center gap-x-2 cursor-pointer">
                        <ShoppingBag className="text-gray-700 hover:text-blue-500" size={28} />
                        <span>Cart</span>
                    </div>
                    <div className="flex items-center gap-x-2 cursor-pointer">
                        <UsersRound className="text-gray-700 hover:text-blue-500" size={28} />
                        <span>Login</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;