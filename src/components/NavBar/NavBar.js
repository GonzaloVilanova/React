import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Nav className="NavBar">
        <NavItem>
          <CardWidget />
        </NavItem>
        <NavItem>
          <NavLink active href="#">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Nosotros</NavLink>
        </NavItem>
        <NavItem>
          <NavLink active href="#">
            Paga tu Saldo
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active href="#">
            Contacto
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavBar;
