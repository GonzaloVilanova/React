import React, { useContext } from "react";
import { Nav, NavItem } from "reactstrap";
import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assests/img/Logotras.png";
import { CartContext } from "../../context/CartContext";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <Nav className="NavBar">
        <NavItem>
          <Link to="/">
            {" "}
            <img className="Logo" src={logo} alt="logo-Sinergia" />
          </Link>
        </NavItem>
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
        {cart.length !== 0 ? (
          <NavItem>
            <Link to="/Cart">
              <CardWidget />
            </Link>
          </NavItem>
        ) : (
          ""
        )}
      </Nav>
    </div>
  );
};

export default NavBar;
