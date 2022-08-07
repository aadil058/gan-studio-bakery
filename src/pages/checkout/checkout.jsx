import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { BakeryButton } from "../../components/button/button";
import { CheckoutItem } from "../../components/checkout-item/checkout-item";
import { selectCartProducts } from "../../state/productSlice";
import "./checkout.scss";

export const CheckoutPage = () => {
  const cartProducts = useSelector(selectCartProducts);
  const isCartEmpty = cartProducts.length <= 0;
  const total = useMemo(
    () =>
      cartProducts.reduce(
        (acc, product) => acc + product.sellingPrice * product.cartQuantity,
        0
      ),
    [cartProducts]
  );

  const makePayment = () => {
    const payload = {};

    payload.products = cartProducts.map((product) => ({
      productId: product.id,
      quantity: product.cartQuantity,
      unitPrice: product.sellingPrice,
    }));

    payload.cartTotal = total;

    console.log(payload);
  };

  return (
    <div className="checkoutpage content">
      <div className="checkout-details">
        <h2 className="headline">Shopping Cart</h2>
        {!isCartEmpty ? (
          cartProducts.map((product) => (
            <CheckoutItem key={product.id} product={product} />
          ))
        ) : (
          <p>Your shopping cart is empty!</p>
        )}
        {!isCartEmpty && (
          <div className="subtotal">
            <h3>
              Subtotal: <span>${Math.round(total * 100) / 100}</span>
            </h3>
            <BakeryButton
              className="pay-now-btn"
              onClick={makePayment}
              text="Pay Now"
            />
          </div>
        )}
      </div>
    </div>
  );
};
