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

  const [cart, setCart] = useState([]); // Array vacío carrito sin productos

  const addCuota = (id, counter, saldo, empresa, cuenta) => {
    const agregaCuota = cart.map((deuda) => {
      return id === deuda.id
        ? { ...deuda, cuotasAPagar: counter }
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

  const foo = () => {
    alert("sssssss");
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addCuota, foo }}>
      {children}
    </CartContext.Provider>
  );
};
