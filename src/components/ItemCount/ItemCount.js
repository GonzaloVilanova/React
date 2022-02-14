import React, { useState } from "react";
import { Card, Button, CardText } from "reactstrap";
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, id, saldo, onAdd, addToCart }) => {
  const [counter, setCounter] = useState(1);

  const counterUp = () => {
    if (counter < stock) {
      setCounter(counter + 1); // Agrega 1 cuota
    }
  };

  const counterDown = () => {
    if (counter > 0) {
      setCounter(counter - 1); // Quita 1 cuota
    }
  };

  return (
    <div className="container">
      <Card>
        <CardText>Cantidad Seleccionada: {counter}</CardText>

        {addToCart == false ? (
          <>
            <CardText>
              <Button color="success" onClick={counterUp}>
                Agrega
              </Button>
              <Button color="danger" onClick={counterDown}>
                Elimina
              </Button>
            </CardText>
            <Button color="primary" onClick={onAdd}>
              Agregar al Carrito
            </Button>
          </>
        ) : (
          <NavItem>
            <Link to="/Cart">
              <Button color="primary">Finalizar Compra</Button>
            </Link>
          </NavItem>
        )}
        <CardText></CardText>
      </Card>
    </div>
  );
};

export default ItemCount;
