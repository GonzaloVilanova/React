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

  //const { foo } = useContext(CartContext);

  const { agregaDeuda } = useContext(CartContext);

  const onAdd = (id, counter, saldo, empresa, cuenta) => {
    setAddtocart(true);

    const deuda = {
      // armamos un objeto deuda con el id, saldo, etc
      id: id,
      saldo: saldo,
      CuentaOrig: cuenta,
      Empresa: empresa,
    };

    agregaDeuda(deuda, counter); // llamamos a la funcion del context agregaDeuda, que recibia dos parametros: un objeto deuda y la cantidad de cuotas
  };

  return (
    <div className="item-wrap">
      <Card>
        <CardBody>
          <CardImg alt="Card image cap" src={deudor.img} top width="100%" />
          <CardTitle tag="h5">DETALLE Deuda:</CardTitle>
          <CardText>DEUDOR: {deudor.nombre}</CardText>
          <CardSubtitle>
            Empresa: {deudor.empresa}(Cuenta {deudor.cuenta})
          </CardSubtitle>
          <CardText>Saldo: ${deudor.saldo}</CardText>
          <CardText>
            Este es el detalle de su saldo pendiente con {deudor.empresa}. Tenga
            presente que cuanto más cuotas abone, menos intereses se aplicarán.
            En caso de cancelar mas de 3 deudas, consulte por un descuento
            adicional desde la sección{" "}
            <Link to="/Contact" className="LinkContacto">
              CONTACTO.
            </Link>
          </CardText>
          <CardText>Cuotas Pendientes: {deudor.cuotas}</CardText>

          <CardText>
            {addToCart === false ? (
              <ItemCount
                data={deudor}
                stock={deudor.cuotas}
                id={deudor.id}
                saldo={deudor.saldo}
                empresa={deudor.empresa}
                cuenta={deudor.cuenta}
                onAdd={onAdd}
                addToCart={addToCart}
              />
            ) : (
              <NavItem>
                <Link to="/Payments">
                  <Button color="primary" className="BtnItem">
                    Agrega otras Deudas
                  </Button>
                </Link>
                <Link to="/Cart">
                  <Button color="success" className="BtnItem">
                    Finalizar Compra
                  </Button>
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
