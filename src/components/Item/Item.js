import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

import "./item.css";

const Item = ({ cliente }) => {
  return (
    <div className="item-wrap">
      <Card>
        <CardBody>
          <CardTitle tag="h5">Deuda: {cliente.company.name}</CardTitle>
          <CardText>DEUDOR: {cliente.name}</CardText>
          Email NOTIFICADO: {cliente.email}
        </CardBody>
      </Card>
    </div>
  );
};

export default Item;
