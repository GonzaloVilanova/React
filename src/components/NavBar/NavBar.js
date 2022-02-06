import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assests/img/Logotras.png";

const NavBar = () => {
  return (
    <div>
      <Nav className="NavBar">
        <img className="Logo" src={logo} alt="logo-Sinergia" />
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/Services">Servicios</Link>
        </NavItem>
        <NavItem>
          <Link to="/Payments">Paga tu Saldo</Link>
        </NavItem>
        <NavItem>
          <Link to="/Contact">Contacto</Link>
        </NavItem>
        <NavItem>
          <CardWidget />
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavBar;
