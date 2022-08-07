import React from "react";
import { useSelector } from "react-redux";
import { selectTopFourProducts } from "../../state/productSlice";
import { ProductCard } from "../card/card";
import "./topselling.scss";

export const TopSelling = () => {
  const topProducts = useSelector(selectTopFourProducts);
  return (
    <div className="top-selling">
      <h1 className="headline">Our Top Selling Products</h1>
      <div className="top-products-container">
        {topProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
