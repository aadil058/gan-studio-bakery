import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import { MenuOutlined } from "@ant-design/icons";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { useResponsive } from "../../customhook/useResponsive";
import { CartWidget } from "../cart/cart";
import { Navigation } from "../nav/nav";
import "react-modern-drawer/dist/index.css";
import "./header.scss";

export const Header = () => {
  const isMobile = useResponsive();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="header">
        {isMobile ? (
          <div className="logo" onClick={() => setIsDrawerOpen(true)}>
            <MenuOutlined />
            <Logo />
          </div>
        ) : (
          <Logo onClick={() => setIsDrawerOpen(true)} />
        )}
        <Navigation />
        <CartWidget />
      </header>
      {isMobile && (
        <Drawer
          open={isDrawerOpen}
          direction="right"
          className="drawer"
          onClose={() => setIsDrawerOpen(false)}
        >
          <Navigation drawer={isDrawerOpen} />
        </Drawer>
      )}
    </>
  );
};
