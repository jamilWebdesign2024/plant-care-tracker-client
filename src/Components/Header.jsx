import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: 'https://i.postimg.cc/Vv0BGysw/slider-1.jpg',
    title: 'We set The Standerds',
    slogan: 'Live Up To 50% Off',
    description: 'Living environmental standards for industry and others to meet, it is inadvisable to require the best results that state-of-the-art technology can achieve',
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/V5y9275C/slider-2.jpg',
    title: 'A Dream Garden Home',
    slogan: 'WE ARE SPRING PLANT',
    description: ' A spring plant is any plant that boosts growth after winter in the early months. These spring plants show better growth performance',
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/J7sfVGGr/slider-3.jpg',
    title: 'A Dream Garden Home',
    slogan: 'MAKE YOUR HOME LIVERLY',
    description: 'A garden summer house can be used as your very own unique space. You can transform it into a studio for writing, painting, or other craft activities',
  },
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTextVisible(true);
      }, 1000); // টেক্সট অ্যানিমেশন আউট হওয়ার সময়
    }, 8000); // প্রতি ৫ সেকেন্ডে স্লাইড পরিবর্তন

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full h-screen relative overflow-hidden" ref={carouselRef}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img src={slide.image} className="w-full h-full object-cover" alt={`Slide ${slide.id}`} />
          {index === currentSlide && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <motion.h5
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: textVisible ? 1 : 0, y: textVisible ? 0 : 20 }}
                transition={{ duration: 1 }}
                className="text-base font-bold text-white mb-4"
              >
                {slide.title}
              </motion.h5>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: textVisible ? 1 : 0, y: textVisible ? 0 : 20 }}
                transition={{ duration: 1 }}
                className="text-6xl font-bold text-white mb-4"
              >
                {slide.slogan}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: textVisible ? 1 : 0, y: textVisible ? 0 : 20 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-white mb-4 text-[12px]"
              >
                {slide.description}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: textVisible ? 1 : 0, y: textVisible ? 0 : 20 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="btn btn-primary border-none bg-[#4ea9ae]"
              >
                Shop Now
              </motion.button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Header;


