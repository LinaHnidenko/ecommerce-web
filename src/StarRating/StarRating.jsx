import React from "react";

import { FaStar } from "react-icons/fa";
const StarRating = ({ rate }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex">
      {stars.map((star) => (
        <span key={star}>
          {star <= rate ? (
            <FaStar className="fill-gold w-4 h-4 md:w-5 md:h-5" />
          ) : (
            <FaStar className="fill-accent4 w-4 h-4 md:w-5 md:h-5" />
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
