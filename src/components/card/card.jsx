import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseItemCartQuantity,
  increaseItemCartQuantity,
  removeFromCart,
} from "../../state/productSlice";
import { BakeryButton } from "../button/button";
import { CartControl } from "../cart-control/cart-control";
import "./card.scss";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.imageSrc} alt={product.name} />
      <div className="product-details">
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <p className="selling-price">${product.sellingPrice}</p>
      </div>

      {!product.cartQuantity ? (
        <BakeryButton
          text="Add to Cart"
          onClick={() => dispatch(addToCart(product.id))}
        />
      ) : (
        <CartControl
          quantity={product.cartQuantity}
          onReduce={() => dispatch(decreaseItemCartQuantity(product.id))}
          onIncrease={() => dispatch(increaseItemCartQuantity(product.id))}
          onRemove={() => dispatch(removeFromCart(product.id))}
        />
      )}
    </div>
  );
};
