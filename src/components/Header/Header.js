import React from "react";
import "./Header.css";
import logo from "../../assests/img/Logotras.png";

const Header = ({ title }) => {
  return (
    <div className="Header">
      <img className="Logo" src={logo} alt="logo-Sinergia" />
      <h1>{title}</h1>
      <h2>Centro de Gestion de Deudas</h2>
    </div>
  );
};

Header.defaultProps = {
  title: "Bienvenido Gonzalo!",
};

export default Header;
