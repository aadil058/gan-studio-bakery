import React from "react";
import { Routes, Route } from "react-router-dom";
import { CheckoutPage } from "./pages/checkout/checkout";
import { HomePage } from "./pages/home/home";
import { PageLayout } from "./pages/PageLayout";
import { ProductsPage } from "./pages/product/product";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};
