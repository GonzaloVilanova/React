import React, { useState } from "react";
import { Card, Button, CardText } from "reactstrap";

//COMPONENTS

const ItemCount = ({ stock, initial, id, saldo, addToCart }) => {
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

  const onAdd = (idDeuda, cantSelecc) => {
    const foundItem = "";
    console.log(id); // Envia la cantidad al carrito -- A CONTEXT ??
    //setAddtocart();
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
          <Button color="primary" onClick={onAdd}>
            Agregar al Carrito
          </Button>
        </CardText>
      </Card>
    </div>
  );
};

export default ItemCount;
