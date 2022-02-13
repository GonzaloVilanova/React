import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([
    {
      id: 1,
      empresa: "Cencosud",
      saldo: "$8500",
      cuotasAPagar: 8,
    },
    {
      id: 2,
      empresa: "Tarjeta Naranja",
      saldo: "$19750",
      cuotasAPagar: 3,
    },
  ]); // Array vacio carrito sin productos

  /*   const agregaCarrito = (id) => {
    const agregaItemCarrito = cart.map((deuda) => {
      cart.id === deuda.id ? { ...deuda, cuotasAPagar: +1 } : { ...deuda };
    });
    setCart(agregaItemCarrito);
  }; */

  const deleteItem = (deudaId) => {
    const updatedDues = cart.filter((deuda) => deuda.id !== deudaId);
  };

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
};
