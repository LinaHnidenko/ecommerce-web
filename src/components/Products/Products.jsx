// import React, { useState } from "react";
// import { useGetProductsQuery } from "../../services/productsAPi";
// import Pagination from "../Pagination/Pagination";
// import ProductItem from "../ProductItem/ProductItem";

// const Products = () => {
//   const productsQuery = useGetProductsQuery();

//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage, setProductsPerPage] = useState(6);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const data = productsQuery.data;

//   if (productsQuery.isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (productsQuery.isError) {
//     return <p>Error loading data</p>;
//   }

//   const lastProductIndex = currentPage * productsPerPage;
//   const firstProductIndex = lastProductIndex - productsPerPage;

//   const currentProducts = data?.results?.slice(
//     firstProductIndex,
//     lastProductIndex
//   );

//   const uniqueCategories = new Set();

//   data?.results?.forEach((product) => {
//     uniqueCategories.add(product.categoryName);
//   });

//   const handleCategoryClick = (e) => {
//     const buttonName = e.target.name;

//     const filterProducts = data?.results?.filter(
//       (product) => product.categoryName === buttonName
//     );
//     if (buttonName === "all") setFilteredProducts([]);

//     return setFilteredProducts(filterProducts);
//   };

//   return (
//     <section>
//       <h2>Products</h2>
//       <ul>
//         <li>
//           <button onClick={handleCategoryClick} name="all">
//             All
//           </button>
//         </li>

//         {[...uniqueCategories].map((category, idx) => (
//           <li key={idx}>
//             <button onClick={handleCategoryClick} name={category}>
//               {category}
//             </button>
//           </li>
//         ))}
//       </ul>
//       <ul>
//         {filteredProducts.length > 0
//           ? filteredProducts?.map(
//               ({ images, categoryName, name, price, code: id }) => (
//                 <ProductItem
//                   key={id}
//                   images={images}
//                   price={price}
//                   name={name}
//                   categoryName={categoryName}
//                 />
//               )
//             )
//           : currentProducts?.map(
//               ({ images, categoryName, name, price, code: id }) => (
//                 <ProductItem
//                   key={id}
//                   images={images}
//                   price={price}
//                   name={name}
//                   categoryName={categoryName}
//                 />
//               )
//             )}
//       </ul>
//       <Pagination
//         totalProducts={
//           filteredProducts.length > 0
//             ? filteredProducts.length
//             : data.results.length
//         }
//         // totalProducts={data.results.length}
//         productsPerPage={productsPerPage}
//         setCurrentPage={setCurrentPage}
//         currentPage={currentPage}
//       />
//     </section>
//   );
// };

// export default Products;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  useGetInSpecificCategoryQuery,
  useGetProductsQuery,
} from "../../redux/cartSlice/services/productsAPi";
import Categories from "../Categories/Categories";
import Pagination from "../Pagination/Pagination";
import ProductItem from "../ProductItem/ProductItem";

const Products = () => {
  const location = useLocation();
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
    return <p>Loading...</p>;
  }

  if (productsQuery.isError || productsByCategoryQuery.isError) {
    return <p>Error loading data</p>;
  }

  // pagination
  const productsPerPage = 6;
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  const currentProducts = data?.slice(firstProductIndex, lastProductIndex);

  // category clicks
  const handleCategoryClick = (e) => {
    const buttonName = e.target.name;

    setClickedAll(false);
    setCategoryClicked(buttonName);
  };

  const handleAllBtnClick = () => {
    setClickedAll(true);
    setCategoryClicked(null);
  };

  return (
    <section>
      <h2>Products</h2>
      <Categories
        data={data}
        handleCategoryClick={handleCategoryClick}
        handleAllBtnClick={handleAllBtnClick}
      />

      <ul>
        {clickedAll &&
          currentProducts?.map(({ image, category, title, price, id }) => (
            <ProductItem
              key={id}
              image={image}
              price={price}
              title={title}
              category={category}
              id={id}
              state={location}
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
                location={location}
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
    </section>
  );
};

export default Products;
