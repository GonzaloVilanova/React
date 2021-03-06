import React, { useState } from "react";
import { Card, Button, CardText } from "reactstrap";

const ItemCount = ({ stock, id, saldo, onAdd, empresa, cuenta }) => {
  const [counter, setCounter] = useState(1);

  const counterUp = () => {
    if (counter < stock) {
      setCounter(counter + 1); // Agrega 1 cuota
    }
  };

  const counterDown = () => {
    if (counter > 1) {
      setCounter(counter - 1); // Quita 1 cuota
    }
  };

  return (
    <div className="container">
      <Card>
        <CardText>Cantidad Seleccionada: {counter}</CardText>

        <>
          <CardText>
            <Button className="BtnItem" color="success" onClick={counterUp}>
              Agrega
            </Button>
            <Button className="BtnItem" color="danger" onClick={counterDown}>
              Elimina
            </Button>
          </CardText>
          <Button
            color="primary"
            onClick={() => onAdd(id, counter, saldo, empresa, cuenta)}
          >
            Agregar al Carrito
          </Button>
        </>

        <CardText></CardText>
      </Card>
    </div>
  );
};

export default ItemCount;
