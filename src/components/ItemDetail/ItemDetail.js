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

  const { cart, setCart } = useContext(CartContext);

  //const { foo } = useContext(CartContext);
  const { addCuota } = useContext(CartContext);

  const onAdd = (id, cantidad, saldo) => {
    setAddtocart(true);
    console.log("Deuda ID: " + id);
    console.log("Cant Marcada: " + cantidad);

    console.log("SaldoCuota: " + saldo);

    addCuota(id, saldo, cantidad);
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
          {/*           <Button color="primary" onClick={() => foo()}>
            SSSS
          </Button> */}
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
