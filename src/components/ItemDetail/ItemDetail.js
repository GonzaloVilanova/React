import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";

//CONTEXT
import { CartContext } from "../../context/CartContext";

//COMPONENTS
import ItemCount from "../ItemCount/ItemCount";

// PROPS DRILLING

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
  const [addToCart, setAddtocart] = useState(false); // Array vacio para agregar al carrito

  console.log(addToCart);
  //const [data] = useContext(CartContext);

  const onAdd = () => {
    setAddtocart(true);
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
          <CardText>Saldo: ${deudor.saldo}</CardText>
          <CardText>
            DETALLE COMPLETO DE SU DEUDA...AÑO TAL... PRODUCTO TAL...
          </CardText>
          <CardText>Cuotas Pendientes: {deudor.cuotas}</CardText>

          <CardText>
            {addToCart == false ? (
              <ItemCount
                data={deudor}
                stock={deudor.cuotas}
                id={deudor.id}
                saldo={deudor.saldo}
                onAdd={onAdd}
                addToCart={addToCart}
              />
            ) : (
              <NavItem>
                <Link to="/Cart">
                  <Button color="primary">Finalizar Compra</Button>
                </Link>
              </NavItem>
            )}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemDetail;
