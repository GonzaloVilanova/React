import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";

//REACTSTRAPP
import { Table, Button } from "reactstrap";

// ROUTER DOM
import { Link } from "react-router-dom";

const Carrito = () => {
  const { cart } = useContext(CartContext);
  const { deleteItem } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);

  const acumulaTotal = 0;

  return (
    <div>
      Carrito
      {cart.length === 0 ? (
        <p>
          No hay Items en el carrito! Realiza tu selección desde{" "}
          <Link to="/Payments">
            <Button color="primary">ACA</Button>
          </Link>
        </p>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>N de Cuenta</th>
              <th>Empresa</th>
              <th>Cuotas</th>
              <th>Subtotal</th>
              <th>Quitar</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {cart.map((seleccion) => (
              <tr>
                <td key={cart.id}>{seleccion.id}</td>
                <td>{seleccion.CuentaOrig}</td>
                <td>{seleccion.Empresa}</td>
                <td>{seleccion.cuotasAPagar}</td>
                <td>${seleccion.saldo * seleccion.cuotasAPagar}</td>
                <td>
                  {" "}
                  <Button color="primary" onClick={() => deleteItem(cart.id)}>
                    X
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>

              <td>TOTAL a PAGAR:</td>
              <td>${acumulaTotal}</td>
              <td>
                <Button color="primary" onClick={() => clearCart()}>
                  BORRAR TODO
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Carrito;
