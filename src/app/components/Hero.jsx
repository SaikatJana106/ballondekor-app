"use client";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="overflow-hidden py-4 px-10 max-sm:px-2">
            <Slider {...settings}>
               
                <div className="relative w-full h-[400px] max-md:h-[300px] max-sm:h-[200px]">
                    <Image 
                        src="/fist pic.avif" 
                        alt="First Banner" 
                        loading="lazy"
                        fill
                        className="rounded-2xl object-cover max-sm:object-contain"
                    />
                </div>

                
                <div className="relative w-full h-[400px] max-md:h-[300px] max-sm:h-[200px]">
                    <Image 
                        src="/forth pic.avif" 
                        alt="Second Banner" 
                        loading="lazy"
                        fill
                        className="rounded-2xl object-cover max-sm:object-contain"
                    />
                </div>

                
                <div className="relative w-full h-[400px] max-md:h-[300px] max-sm:h-[200px]">
                    <Image 
                        src="/fifth pic.avif" 
                        alt="Third Banner" 
                        loading="lazy"
                        fill
                        className="rounded-2xl object-cover max-sm:object-contain"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Hero;
