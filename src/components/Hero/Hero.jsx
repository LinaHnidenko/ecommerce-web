import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <img src="images/jewelry.jpg" alt="" />
        <img src="images/man.jpg" alt="" />
        <p className="absolute top-10 left-10 text-white">
          Discover Your Style, Shop with Confidence.
        </p>
      </div>
    </div>
  );
};

export default Hero;
