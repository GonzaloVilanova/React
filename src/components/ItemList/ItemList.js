import React from "react";
import Item from "../Item/Item";

{
  /* segundo Ejemplo haciendo una consulta a una api*/
}

// const ItemList = ({users}) => {
const ItemList = ({ clientes }) => {
  return (
    <div>
      {clientes.map((cliente) => (
        <Item key={clientes.id} clientes={clientes.nombre}></Item>
      ))}
    </div>
  );
};

export default ItemList;
