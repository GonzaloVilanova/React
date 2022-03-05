import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
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

  //console.log(cart);

  //Borrar Item Individual
  const deleteItem = (deudaId) => {
    const updateDues = cart.filter((deuda) => deudaId !== deuda.id);
    setCart(updateDues);
    //console.log("Id Item a Borrar: ", deudaId);
    // console.log("Id Item a Borrar2: ", cart.id);
  };

  //Borrar TODO el carrito
  const clearCart = () => {
    setCart([]);
  };

  //Total Items Seleccionados
  const itemsTotalesCarrito = cart
    .map((item) => item.cuotasAPagar)
    .reduce((prev, curr) => prev + curr, 0);

  //Total a abonar
  const saldoTotal = cart
    .map((item) => item.saldo * item.cuotasAPagar)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        agregaDeuda,
        clearCart,
        deleteItem,
        itemsTotalesCarrito,
        saldoTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
