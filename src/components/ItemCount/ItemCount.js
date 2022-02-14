import React, { useState } from "react";
import { Card, Button, CardText } from "reactstrap";

//COMPONENTS

const ItemCount = ({ stock, initial, id, saldo, deudor }) => {
  const [counter, setCounter] = useState(1);

  const [addToCart, setAddtocart] = useState([]); // Array vacio para agregar al carrito

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

  const Agrega = () => {
    console.log("first");
    setAddtocart(deudor);
    console.log(counter);
    console.log(addToCart);
  };

  return (
    <div className="container">
      <Card>
        <CardText>Cantidad Seleccionada: {counter}</CardText>
        <CardText></CardText>
        <Button color="success" onClick={counterUp}>
          Agrega
        </Button>
        <Button color="danger" onClick={counterDown}>
          Elimina
        </Button>
        <CardText>
          <Button color="primary" onClick={Agrega}>
            Agregar al Carrito
          </Button>
        </CardText>
      </Card>
    </div>
  );
};

export default ItemCount;
