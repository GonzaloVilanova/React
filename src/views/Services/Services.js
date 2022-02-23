import React from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";

const Services = () => {
  return (
    <div>
      <CardGroup>
        <Card>
          <CardImg
            alt="RapiPago Logo"
            src="https://devotoshopping.neexcdn.com.ar/wp-content/uploads/2017/03/Logo-Pago-Facil.png"
            top
            height="100px"
          />
          <CardBody>
            <CardTitle tag="h5">RapiPago</CardTitle>
            <CardText>
              Integracion directa con codigos habilitados para RapiPago, asi
              como cobranza telefonica del medio.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Pago Facil Logo"
            src="https://seeklogo.com/images/R/Rapipago-logo-A91BEC6D1D-seeklogo.com.png"
            top
            height="100px"
          />
          <CardBody>
            <CardTitle tag="h5">Pago Facil</CardTitle>
            <CardText>
              Generacion de codigo QR directo a tu cuenta, para que puedas
              cobrar por el medio comentado. Tambien permite la cobranza
              telefónica.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="MercadoPago Logo"
            src="https://www.mgscreativa.com/images/stories/virtuemart/product/logo-mercadopago9.png"
            top
            height="100px"
          />
          <CardBody>
            <CardTitle tag="h5">MercadoPago</CardTitle>
            <CardText>
              No podia faltar el medio de pago mas utilizado de los ultimos
              años, en pleno cercimiento debido a la flexibilidad que ofrece.
              Con seleccionar la opcion, vas a poder abonar por medio de un
              link, codigo QR o de barras directo desde tu cuenta, movil o
              inclusive en cajero
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Services;
