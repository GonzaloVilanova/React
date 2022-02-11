import React, { useState } from "react";
import { Card, Button } from "reactstrap";

const ItemCount = ({ stock, initial }) => {
  const [counter, setCounter] = useState(1);

  const counterUp = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const counterDown = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container">
      <Card>
        <p>Cantidad Seleccionada: {counter}</p>
        <Button color="success" onClick={counterUp}>
          Agrega
        </Button>
        <Button color="danger" onClick={counterDown}>
          Elimina
        </Button>
      </Card>
    </div>
  );
};

export default ItemCount;
