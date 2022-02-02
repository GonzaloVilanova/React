import React from "react";

const Item = ({ cliente }) => {
  return (
    <div>
      <p>{cliente.id}</p>
      <p>{cliente.nombre}</p>
    </div>
  );
};

export default Item;
