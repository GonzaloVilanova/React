import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import "./Cards.css";

const Cards = ({ Saldo, Cliente, Cuenta, img }) => (
  <div className="container">
    <Card>
      <CardBody>
        <CardTitle tag="h5">Deuda {Cliente}</CardTitle>
        <img src={img} alt="Deuda" />
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Numero de Cuenta {Cuenta}
        </CardSubtitle>
        <CardText>
          Pago por deuda Cuenta {Cuenta}, Saldo actualizado {Saldo}. Cliente:{" "}
          {Cliente}.
        </CardText>
        <Button>Pagar!</Button>
      </CardBody>
    </Card>
  </div>
);

export default Cards;
