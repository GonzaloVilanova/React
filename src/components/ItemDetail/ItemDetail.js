import React, { useState } from "react";

import "./ItemDetail.css";

//COMPONENTS
import ItemCount from "../ItemCount/ItemCount";

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
  const [addtocart, setAddtocart] = useState([]); // Array vacio para agregar al carrito

  const onAdd = () => {
    console.log("Agrega Item a Carrito");
  };

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
          <CardText>Cuotas Pendientes: {deudor.cuotas}</CardText>
          <CardText>
            <ItemCount stock={deudor.cuotas} />
          </CardText>
          <CardText>
            <Button color="primary" onClick={onAdd}>
              Agregar al Carrito
            </Button>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemDetail;
