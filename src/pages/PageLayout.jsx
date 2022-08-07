import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";

export const PageLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};
