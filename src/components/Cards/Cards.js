import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import "./Cards.css";

const Cards = ({ saldo, cliente, cuenta, img }) => {
  const [counter, setCounter] = useState(1);

  const counterUp = () => {
    setCounter(counter + 1);
  };

  const counterDown = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container">
      <Card>
        <CardBody>
          <CardTitle tag="h5">Deuda {cliente}</CardTitle>
          <img src={img} alt="Deuda" />
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Numero de Cuenta {cuenta}
          </CardSubtitle>
          <CardText>
            Pago por deuda Cuenta {cuenta}, Saldo actualizado {saldo}. Cliente:{" "}
            {cliente}. Cuotas a pagar:
            <CardText>
              <Button onClick={counterUp}>Agrega</Button>
              <Button onClick={counterDown}>Elimina</Button>
              <p>Seleccionaste {counter} cuotas para pagar</p>
            </CardText>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};
export default Cards;
