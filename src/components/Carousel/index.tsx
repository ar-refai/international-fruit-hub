'use client'
import React, { useEffect, useRef, useState } from 'react';

const images = [
    { src: "images/img1.jpg", author: "IFH", title: "INTERNATIONAL FRUIT HUB", topic: "FRUITS & VEGETABLES", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, architecto laborum! Earum quas iusto fugit. Iure veritatis magni maxime voluptatem!" },
    { src: "images/img2.jpg", author: "IFH", title: "INTERNATIONAL FRUIT HUB", topic: "FRUITS & VEGETABLES", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, architecto laborum! Earum quas iusto fugit. Iure veritatis magni maxime voluptatem!" },
    { src: "images/img3.jpg", author: "IFH", title: "INTERNATIONAL FRUIT HUB", topic: "FRUITS & VEGETABLES", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, architecto laborum! Earum quas iusto fugit. Iure veritatis magni maxime voluptatem!" },
    { src: "images/img4.jpg", author: "IFH", title: "INTERNATIONAL FRUIT HUB", topic: "FRUITS & VEGETABLES", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, architecto laborum! Earum quas iusto fugit. Iure veritatis magni maxime voluptatem!" }
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState("opacity-0");
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setFadeClass("opacity-0");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFadeClass("opacity-100");
        }, 1000);
    };

    const prevSlide = () => {
        setFadeClass("opacity-0");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setFadeClass("opacity-100");
        }, 1000);
    };

    const handleThumbnailClick = (index: number) => {
        setFadeClass("opacity-0");
        setTimeout(() => {
            setCurrentIndex(index);
            setFadeClass("opacity-100");
        }, 1000);
    };

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(nextSlide, 6000);
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentIndex]);

    useEffect(() => {
        setFadeClass("opacity-100");
    }, []);

    return (
        <div className="relative h-screen max-w-[100%] overflow-hidden">
            <div className="carousel relative w-full h-full">
                
                {images.map((image, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="bg-black opacity-50 w-full h-full absolute"></div>
                        <img src={image.src} className="w-full h-full object-cover" alt={image.title} />
                        <div className={`absolute top-1/4 right-1/2 transform  text-white  max-w-2xl transition-opacity duration-1000 ${currentIndex === index ? fadeClass : 'opacity-0'}`}>
                            <div className="text-7xl font-bold my-4 transition-opacity duration-1000 delay-200">{image.title}</div>
                            <div className="text-5xl font-bold text-primary transition-opacity duration-1000 delay-500">{image.topic}</div>
                            <div className="text-lg mt-4 transition-opacity duration-1000 delay-700">{image.description}</div>
                            <div className="mt-8 flex justify-start space-x-4">
                                <button className="bg-white border-2 border-white text-black px-6 py-3 hover:bg-transparent hover:text-white transition-all ease-out duration-150">ABOUT US</button>
                                <button className="border-2 border-white px-6 py-3 hover:bg-white hover:text-black">CONTACT</button>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="absolute bottom-12 right-1/4 flex space-x-4">
                    {images.map((image, index) => (
                        <div key={index} className="relative w-36 h-56 cursor-pointer" onClick={() => handleThumbnailClick(index)}>
                            <img src={image.src} className="w-full h-full object-cover rounded-lg" alt={image.title} />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-md text-center">{image.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="absolute top-0 left-0 h-1 bg-orange-600 transition-all duration-3000" style={{ width: `${(currentIndex + 1) / images.length * 100}%` }}></div>
        </div>
    );
};

export default Carousel;
