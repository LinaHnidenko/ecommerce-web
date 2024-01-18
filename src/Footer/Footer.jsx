import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-[100%] py-[20px] md:py-[40px] bg-grayBg">
      <div className="container">
        <div className="flex flex-col justify-center md:flex-row md:justify-between items-center gap-8">
          <div className="flex justify-center md:justify-start flex-col gap-2">
            <h3 className="font-bold text-lg">Can we help you?</h3>

            <p className="flex flex-row gap-1 items-center text-grayText font-semibold text-sm">
              <FiPhoneCall />
              Call 00 800 123 45 67
            </p>
            <p className="text-xs">
              From Mondays to Fridays from 10:00 to 18:00.
            </p>
          </div>
          <div className="flex justify-start flex-row gap-4">
            <RiInstagramFill className="w-6 h-6 md:w-8 md:h-8 xl:w-9 xl:h-9 cursor-pointer transition-all hover:fill-darkBlueBtn" />
            <FaFacebook className="w-6 h-6 md:w-8 md:h-8 xl:w-9 xl:h-9 cursor-pointer transition-all hover:fill-darkBlueBtn" />
            <FaSquareTwitter className="w-6 h-6 md:w-8 md:h-8 xl:w-9 xl:h-9 cursor-pointer transition-all hover:fill-darkBlueBtn" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
