import React from 'react';
const WeOffer = () => {
    const services = [
        { src: '/bridetobe.webp', title: 'Bride to Be', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sed nisi qui expedita vitae dolore eos.' },
        { src: '/canopydecor.webp', title: 'Balloon Decor', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sed nisi qui expedita vitae dolore eos.' },
        { src: '/ballowndecor.webp', title: 'Canopy Decor', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sed nisi qui expedita vitae dolore eos.' },
        { src: '/proposeldecor.webp', title: 'Proposal Decor', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sed nisi qui expedita vitae dolore eos.' },
    ];

    return (
        <div className='bg-[#E7EDEF] p-2 m-10 rounded-2xl'>
            <h1 className='text-center font-semibold text-gray-900 text-4xl max-md:text-2xl'>Check Out Our Vlogs</h1>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 p-6">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="relative h-64 w-full bg-cover bg-center rounded-lg shadow-md overflow-hidden group"
                        style={{ backgroundImage: `url(${item.src})` }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>

                        {/* Text at the bottom */}
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h4 className="text-lg font-semibold">{item.title}</h4>
                            <p className="text-sm">{item.description}</p>
                        </div>

                        {/* "Read More" button (visible on hover) */}
                        <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white font-semibold backdrop-blur-md bg-black/30 border border-white/40 px-4 py-2 rounded-lg transition duration-300">
                            Read More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeOffer;
