import React from "react";
import { FaAngleLeft } from "react-icons/fa6";

const Pagination = ({
  totalProducts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i += 1) {
    pages.push(i);
  }
  <FaAngleLeft />;
  return (
    <ul className="flex items-center justify-center gap-1">
      {pages.map((page, idx) => {
        return (
          <li className="rounded ">
            <button
              key={idx}
              onClick={() => setCurrentPage(page)}
              className={`${
                page === currentPage ? "bg-darkBlueBtn" : ""
              } w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-11 border border-accent1 rounded text-sm md:text-base transition-all `}
            >
              {page}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
