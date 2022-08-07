import React from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../../components/card/card";
import { selectProducts } from "../../state/productSlice";
import "./product.scss";

export const ProductsPage = () => {
  const allProducts = useSelector(selectProducts);
  return (
    <div className="productpage content">
      <h1 className="headline">All Products</h1>
      <div className="all-products-container">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
