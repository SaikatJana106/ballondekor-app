"use client";
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
               
                <div className="relative w-full">
                    <img
                        src="/fist pic.avif" 
                        alt="First Banner" 
                        loading="lazy"
                        className="rounded-2xl h-full w-full object-cover max-sm:object-contain object-center"
                    />
                </div>

                
                <div className="relative w-full">
                    <img
                        src="/forth pic.avif" 
                        alt="Second Banner" 
                        loading="lazy"
                        className="rounded-2xl h-full w-full object-cover max-sm:object-contain object-center"
                    />
                </div>

                
                <div className="relative w-full">
                    <img
                        src="/fifth pic.avif" 
                        alt="Third Banner" 
                        loading="lazy"
                        className="rounded-2xl h-full w-full object-cover max-sm:object-contain object-center"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Hero;
