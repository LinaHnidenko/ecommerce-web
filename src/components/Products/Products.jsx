import React from "react";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../../services/productsAPi";
import ProductItem from "../ProductItem/ProductItem";

const Products = () => {
  const { data } = useGetProductsQuery();

  const { data: categories } = useGetCategoriesQuery();

  return (
    <section>
      <h2>Products</h2>
      <ul>
        <li>
          <button>All</button>
        </li>
        {categories?.map((category, idx) => (
          <li key={idx}>
            <button>{category.CatName}</button>
          </li>
        ))}
      </ul>
      <ul>
        {data?.results?.map(
          ({ images, categoryName, name, price, code: id }) => (
            <ProductItem
              key={id}
              images={images}
              price={price}
              name={name}
              categoryName={categoryName}
            />
          )
        )}
      </ul>
    </section>
  );
};

export default Products;
