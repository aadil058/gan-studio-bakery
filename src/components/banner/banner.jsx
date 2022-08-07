import React from "react";
import { useNavigate } from "react-router-dom";
import DonutsNonPlate from "../../assets/images/donuts-non-plate.png";
import Donuts from "../../assets/images/donuts.png";
import { BakeryButton } from "../button/button";
import "./banner.scss";

export const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner">
      <div className="banner-left">
        <img src={DonutsNonPlate} alt="donuts without plate" />
        <img src={Donuts} alt="donuts" />
      </div>
      <div className="banner-right">
        <h1 className="headline">
          Exquisite taste <br /> for true <br /> connoisseurs
        </h1>
        <p className="subtext">
          We offer you to experience true pleasure. And not only from the taste
          of our desserts, but also from exclusive dishes prepared by high-level
          chefs and, of course, unique drinks created by the best bartenders!
        </p>
        <BakeryButton
          text="Open Catalog"
          onClick={() => navigate("/products")}
        />
      </div>
    </div>
  );
};
