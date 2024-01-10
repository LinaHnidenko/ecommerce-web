import React from "react";

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
  return (
    <div>
      {pages.map((page, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
