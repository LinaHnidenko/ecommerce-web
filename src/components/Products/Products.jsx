import React, { useState } from "react";
import { Hourglass } from "react-loader-spinner";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import {
  useGetInSpecificCategoryQuery,
  useGetProductsQuery,
} from "../../redux/services/productsAPi";
import Categories from "../Categories/Categories";
import Pagination from "../Pagination/Pagination";
import ProductItem from "../ProductItem/ProductItem";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // category state
  const [clickedAll, setClickedAll] = useState(true);
  const [categoryClicked, setCategoryClicked] = useState(null);

  // requests
  const productsQuery = useGetProductsQuery();
  const productsByCategoryQuery =
    useGetInSpecificCategoryQuery(categoryClicked);

  const data = productsQuery.data;

  if (productsQuery.isLoading || productsByCategoryQuery.isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  }

  if (productsQuery.isError || productsByCategoryQuery.isError) {
    return Notify.failure("Error loading data");
  }

  // pagination
  const productsPerPage = 6;
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  const currentProducts = data?.slice(firstProductIndex, lastProductIndex);

  const handleCategoryClick = (e, categoryName) => {
    setClickedAll(false);
    setCategoryClicked(categoryName);
  };

  const handleAllBtnClick = () => {
    setClickedAll(true);
    setCategoryClicked(null);
  };

  return (
    <section className="py-[50px]">
      <div className="container">
        <Categories
          data={data}
          handleCategoryClick={handleCategoryClick}
          handleAllBtnClick={handleAllBtnClick}
        />

        <ul className="flex justify-center items-center flex-col gap-5 md:flex-row md:flex-wrap md:gap-10 xl:gap-12 mb-6 md:mb-10 xl:mb-20">
          {clickedAll &&
            currentProducts?.map(({ image, category, title, price, id }) => (
              <ProductItem
                key={id}
                image={image}
                price={price}
                title={title}
                category={category}
                id={id}
              />
            ))}
          {categoryClicked &&
            productsByCategoryQuery?.data?.map(
              ({ image, category, title, price, id }) => (
                <ProductItem
                  key={id}
                  image={image}
                  price={price}
                  title={title}
                  category={category}
                  id={id}
                />
              )
            )}
        </ul>

        {clickedAll && (
          <Pagination
            totalProducts={data.length}
            productsPerPage={productsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </section>
  );
};

export default Products;
