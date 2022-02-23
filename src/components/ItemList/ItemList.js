import React from "react";

//COMPONENTS
import Item from "../Item/Item";

import "./itemList.css";

const ItemList = ({ clientes }) => {
  return (
    <div className="itemList-wrap">
      {clientes.map((cliente) => (
        <Item key={cliente.id} cliente={cliente}></Item>
      ))}
    </div>
  );
};

export default ItemList;
