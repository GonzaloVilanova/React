import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //const [cart, setCart] = useState(testingState);

  const [cart, setCart] = useState([]); // Array vacío carrito sin productos

  const agregaDeuda = (deuda, cantidadMarcada) => {
    const deudaEncontrada = cart.find(
      (deudaEnCart) => deudaEnCart.id === deuda.id
    );
    if (deudaEncontrada) {
      deudaEncontrada.cuotasAPagar += cantidadMarcada;
    } else {
      cart.push({ ...deuda, cuotasAPagar: cantidadMarcada });
    }

    setCart([...cart]);
  };

  console.log(cart);

  const deleteItem = (deudaId) => {
    const updatedDues = cart.filter((deuda) => deuda.id !== deudaId);
  };

  const clearCart = () => {
    const borrarCarrito = setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, agregaDeuda }}>
      {children}
    </CartContext.Provider>
  );
};
