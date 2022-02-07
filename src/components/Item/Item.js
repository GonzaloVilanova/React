import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

import "./item.css";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

const Item = ({ cliente }) => {
  return (
    <div className="item-wrap">
      <Card>
        <CardBody>
          <CardTitle tag="h5">Deuda: {cliente.empresa}</CardTitle>
          <Link to={`/detail/${cliente.id}`}>
            {" "}
            <CardImg
              alt="Card image cap"
              src={cliente.img2}
              top
              width="100%"
            />{" "}
          </Link>
          <CardText>DEUDOR: {cliente.nombre}</CardText>
          <CardSubtitle>
            Empresa: {cliente.empresa} (Cuenta {cliente.cuenta})
          </CardSubtitle>
          <CardText>Saldo: {cliente.saldo}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Item;
