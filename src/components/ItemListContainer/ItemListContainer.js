import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h4>{greeting}</h4>
    </div>
  );
};

export default ItemListContainer;
