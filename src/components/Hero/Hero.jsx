import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { TiMinus } from "react-icons/ti";

const Hero = () => {
  const slides = ["images/hero/jewelry.jpg", "images/hero/man.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="max-w-[1400] h-[800px] w-full m-auto py-5 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-12px gap-5px">
        {slides.map((slide, slideIdx) => (
          <div
            key={slideIdx}
            onClick={() => setCurrentIndex(slideIdx)}
            className="text-2xl cursor-pointer"
          >
            <TiMinus size={30} className=" hover:text-accent1" />
          </div>
        ))}
      </div>

      <p className="absolute bottom-20 left-10 text-white text-xl font-semibold">
        Discover Your Style. Shop with Confidence.
      </p>
    </div>
  );
};

export default Hero;
