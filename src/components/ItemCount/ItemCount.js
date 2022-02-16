import React, { useState } from "react";
import { Card, Button, CardText } from "reactstrap";
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, id, saldo, onAdd, data }) => {
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

        <>
          <CardText>
            <Button color="success" onClick={counterUp}>
              Agrega
            </Button>
            <Button color="danger" onClick={counterDown}>
              Elimina
            </Button>
          </CardText>
          <Button color="primary" onClick={() => onAdd(id, counter, saldo)}>
            Agregar al Carrito
          </Button>
        </>

        <CardText></CardText>
      </Card>
    </div>
  );
};

export default ItemCount;
