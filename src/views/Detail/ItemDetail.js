import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const ItemDetail = () => {
  const [deudor, setDeudor] = useState([]);
  let id = useParams();
  let idDeudor = id.id;
  console.log(idDeudor);
  console.log(deudor);

  useEffect(() => {
    axios(`${process.env.REACT_APP_MOCKVILANOVA_BASEURL}?id=${idDeudor}`).then(
      (res) => setDeudor(res.data)
    );
  }, [idDeudor]);

  return (
    <div className="item-wrap">
      {deudor.map((deu) => (
        <Card>
          <CardBody>
            <CardTitle tag="h5">DETALLE Deuda: {idDeudor}</CardTitle>

            <CardText>DEUDOR: {deu.nombre}</CardText>
            <CardSubtitle>
              Empresa: {deu.empresa}(Cuenta {deu.cuenta})
            </CardSubtitle>
            <CardText>Saldo: {deu.cuenta}</CardText>
            <CardText>
              DETALLE COMPLETO DE SU DEUDA...AÑO TAL... PRODUCTO TAL...
            </CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default ItemDetail;
