import React from "react";

const Categories = ({ data, handleCategoryClick, handleAllBtnClick }) => {
  const uniqueCategories = new Set();

  data?.forEach((product) => {
    uniqueCategories.add(product.category);
  });

  return (
    <ul className="flex justify-center items-center gap-2 flex-wrap mb-8 md:mb-12 xl:mb-[64px] md:text-lg xl:text-xl">
      <li className="grow-1 flex w-[140px] min-w-0 shrink-0 select-none flex-col items-center justify-center pl-4 transition-all ">
        <button
          onClick={handleAllBtnClick}
          name="all"
          className="flex w-full flex-col items-center gap-1 rounded-xl  px-3 py-2 bg-grayBg transition-all text-grayText hover:bg-accent4 hover:text-accent1 focus:bg-accent4 focus:text-accent1 active:text-accent1"
        >
          <img src="images/category/all.png" alt="" className="w-7 xl:w-9" />
          All
        </button>
      </li>

      {[...uniqueCategories].map((category, idx) => (
        <li
          key={idx}
          className="grow-1 flex  min-w-0 shrink-0  flex-col items-center justify-center pl-4 transition-all "
        >
          <button
            onClick={(e) => handleCategoryClick(e, category)}
            name={category}
            className="flex w-full flex-col items-center gap-1 rounded-xl  px-3 py-2 bg-grayBg transition-all text-grayText hover:bg-accent4 hover:text-accent1 focus:bg-accent4 focus:text-accent1 active:text-accent1"
          >
            <img
              src={`images/category/${category}.png`}
              alt={category}
              className="w-7 xl:w-9"
              onClick={(e) => handleCategoryClick(e, category)}
            />
            {category
              .split(" ")
              .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1))
              .join(" ")}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
