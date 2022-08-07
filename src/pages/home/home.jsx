import React from "react";
import { Banner } from "../../components/banner/banner";
import { TopSelling } from "../../components/topselling/topselling";
import "./home.scss";

export const HomePage = () => {
  return (
    <div className="homepage content">
      <Banner />
      <TopSelling />
    </div>
  );
};
