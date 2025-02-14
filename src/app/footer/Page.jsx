import React from 'react';
import { MapPinned } from 'lucide-react';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8 px-8'>
      <div className='flex flex-col items-center text-center gap-4'>
        <Image src='/logomain.webp' width={180}height={180}></Image>
        <nav className='flex gap-6 text-lg font-medium'>
          <a href="#" className='hover:text-orange-400 transition duration-300 max-md:text-base'>Home</a>
          <a href="#" className='hover:text-orange-400 transition duration-300 max-md:text-base'>About Us</a>
          <a href="#" className='hover:text-orange-400 transition duration-300 max-md:text-base'>Blog</a>
          <a href="#" className='hover:text-orange-400 transition duration-300 max-md:text-base'>Contact Us</a>
        </nav>

        {/* Location */}
        <div className='flex items-center gap-2 text-gray-400 text-sm mt-3'>
          <MapPinned className='text-orange-400' />
          <span>123 Bookstore Street, Kolkata, India</span>
        </div>

        {/* Copyright */}
        <p className='text-gray-500 text-sm mt-4'>© {new Date().getFullYear()} My Bookstore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
