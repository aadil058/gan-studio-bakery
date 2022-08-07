import React from "react";
import { useDispatch } from "react-redux";
import { CloseOutlined } from "@ant-design/icons";
import "./checkout-item.scss";
import { CartControl } from "../cart-control/cart-control";
import {
  decreaseItemCartQuantity,
  increaseItemCartQuantity,
  removeFromCart,
} from "../../state/productSlice";

export const CheckoutItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div key={product.id} className="checkout-item">
      <img src={product.imageSrc} alt={product.name} />
      <div className="checkout-item-details">
        <div className="info-quantity">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <CartControl
            quantity={product.cartQuantity}
            onReduce={() => dispatch(decreaseItemCartQuantity(product.id))}
            onIncrease={() => dispatch(increaseItemCartQuantity(product.id))}
            hideRemove={true}
            alignItems="start"
          />
        </div>
        <CloseOutlined
          className="close-icon"
          onClick={() => dispatch(removeFromCart(product.id))}
        />
      </div>
    </div>
  );
};
