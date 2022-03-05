import React, { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";

//REACTSTRAPP
import { Table, Button, CardText } from "reactstrap";

// ROUTER DOM
import { Link } from "react-router-dom";

//FIREBASE
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";

const Carrito = () => {
  const { cart } = useContext(CartContext);
  const { deleteItem } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);
  const { saldoTotal } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");

  const onSubmitOrder = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "pedidos"), { cart });

    setOrderId(docRef.id);
    clearCart();
  };

  return (
    <div>
      Completa tus pagos
      {cart.length === 0 && orderId == "" ? (
        <p>
          No hay Items en el carrito! Realiza tu selección desde{" "}
          <Link to="/Payments">
            <Button color="primary">ACA</Button>
          </Link>
        </p>
      ) : orderId !== "" ? (
        <CardText>
          {" "}
          <h3>Id de Orden: {orderId}. Pronto te escribimos!!</h3>
        </CardText>
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
                  <Button
                    color="primary"
                    onClick={() => deleteItem(seleccion.id)}
                  >
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
              <td>${saldoTotal}</td>
              <td>
                {" "}
                <Button color="danger" onClick={() => clearCart()}>
                  BORRAR TODO
                </Button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Button color="success" onClick={onSubmitOrder}>
                  Completar Solicitud
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
