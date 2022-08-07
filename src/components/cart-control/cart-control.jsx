import React from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import "./cart-control.scss";

export const CartControl = ({
  quantity,
  onReduce,
  onIncrease,
  onRemove,
  direction = "column",
  hideRemove = false,
  alignItems = "center",
}) => {
  return (
    <div
      className="cart-control"
      style={{ flexDirection: direction, alignItems: alignItems }}
    >
      <div className="counter">
        <button onClick={onReduce}>
          <MinusOutlined />
        </button>
        <p>{quantity}</p>
        <button onClick={onIncrease}>
          <PlusOutlined />
        </button>
      </div>
      {!hideRemove && (
        <button className="remove-cart" onClick={onRemove}>
          Remove from cart
        </button>
      )}
    </div>
  );
};
