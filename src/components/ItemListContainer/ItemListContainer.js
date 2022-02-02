import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.js";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setClientes(json))

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h4>{greeting}</h4>
      <ItemList clientes={clientes}></ItemList>
    </div>
  );
};

export default ItemListContainer;
