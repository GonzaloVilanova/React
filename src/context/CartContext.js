import React, { createContext, useState } from "react";

export const CartContext = createContext();

const testingState = [
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
];

export const CartProvider = ({ children }) => {
  //const [cart, setCart] = useState(testingState);

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
  ]); // Array vacío carrito sin productos

  const addCuota = (deudaId) => {
    // Agrega 1 cuota en el carrito. Por si quiere SUMAR 1 pago mas
    const agregaCuota = cart.map((deuda) => {
      return deudaId === deuda.id
        ? { ...deuda, cuotasAPagar: deuda.cuotasAPagar + 1 }
        : { ...deuda };
    });
    setCart(agregaCuota);
  };

  const deleteItem = (deudaId) => {
    const updatedDues = cart.filter((deuda) => deuda.id !== deudaId);
  };

  const clearCart = () => {
    const borrarCarrito = setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addCuota }}>
      {children}
    </CartContext.Provider>
  );
};
