import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import ShoppingCartOutlined from "@ant-design/icons/ShoppingCartOutlined";

import { BakeryButton } from "../button/button";
import { selectCartProducts } from "../../state/productSlice";
import { useNavigate } from "react-router";
import { useResponsive } from "../../customhook/useResponsive";

export const CartWidget = () => {
  const cartProducts = useSelector(selectCartProducts);
  const isMobile = useResponsive();
  const navigate = useNavigate();

  const totalCartQuantity = useMemo(
    () => cartProducts.reduce((sum, product) => product.cartQuantity + sum, 0),
    [cartProducts]
  );

  return (
    <BakeryButton
      Icon={ShoppingCartOutlined}
      text={isMobile ? totalCartQuantity : `Cart (${totalCartQuantity})`}
      onClick={() => navigate("/checkout")}
    />
  );
};
