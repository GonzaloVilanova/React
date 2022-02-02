import React from "react";
import Item from "../Item/Item";

const ItemList = ({ clientes }) => {
  return (
    <div>
      {clientes.map((cliente) => (
        <Item key={cliente.id} cliente={cliente.name}></Item>
      ))}
    </div>
  );
};

export default ItemList;
