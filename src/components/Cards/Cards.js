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

const Cards = ({ Saldo, Cliente, Cuenta, img }) => {
  const [counter, setCounter] = useState(1);

  const CounterUp = () => {
    setCounter(counter + 1);
  };

  const CounterDown = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container">
      <Card>
        <CardBody>
          <CardTitle tag="h5">Deuda {Cliente}</CardTitle>
          <img src={img} alt="Deuda" />
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Numero de Cuenta {Cuenta}
          </CardSubtitle>
          <CardText>
            Pago por deuda Cuenta {Cuenta}, Saldo actualizado {Saldo}. Cliente:{" "}
            {Cliente}. Cuotas a pagar:
            <CardText>
              <Button onClick={CounterUp}>Agrega</Button>
              <Button onClick={CounterDown}>Elimina</Button>
              <p>Seleccionaste {counter} cuotas para pagar</p>
            </CardText>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};
export default Cards;
