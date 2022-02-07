import React, { useState, useEffect } from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const ItemDetail = ({ deudor }) => {
  return (
    <div className="item-wrap">
      <Card>
        <CardBody>
          <CardImg alt="Card image cap" src={deudor.img2} top width="100%" />
          <CardTitle tag="h5">DETALLE Deuda:</CardTitle>

          <CardText>DEUDOR: {deudor.nombre}</CardText>
          <CardSubtitle>
            Empresa: {deudor.empresa}(Cuenta {deudor.cuenta})
          </CardSubtitle>
          <CardText>Saldo: {deudor.cuenta}</CardText>
          <CardText>
            DETALLE COMPLETO DE SU DEUDA...AÑO TAL... PRODUCTO TAL...
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemDetail;
