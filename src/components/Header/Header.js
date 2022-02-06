import React from "react";
import "./Header.css";

const Header = ({ title }) => {
  return (
    <div className="Header">
      <h2>{title}</h2>
    </div>
  );
};

Header.defaultProps = {
  title: "Bienvenido Gonzalo!",
};

export default Header;
