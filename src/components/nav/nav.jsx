import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";

export const Navigation = ({ drawer }) => {
  const navItems = [
    { link: "/", name: "Home" },
    { link: "/products", name: "Products" },
    { link: "/checkout", name: "Checkout" },
  ];
  return (
    <nav className={`menu ${drawer ? "drawer" : ""}`}>
      <ul className="menu-list">
        {navItems.map((item) => (
          <NavLink key={item.name} className="menu-item" to={item.link}>
            {item.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
