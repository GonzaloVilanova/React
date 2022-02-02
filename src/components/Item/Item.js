import React from "react";

const Item = ({ cliente }) => {
  return (
    <div>
      <p>Id: {cliente.id}</p>
      <p>Nombre: {cliente.name}</p>
    </div>
  );
};

export default Item;
