import React from "react";

const Categories = ({ data, handleCategoryClick, handleAllBtnClick }) => {
  const uniqueCategories = new Set();

  data?.forEach((product) => {
    uniqueCategories.add(product.category);
  });
  return (
    <ul>
      <li>
        <button onClick={handleAllBtnClick} name="all">
          All
        </button>
      </li>

      {[...uniqueCategories].map((category, idx) => (
        <li key={idx}>
          <button onClick={handleCategoryClick} name={category}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
