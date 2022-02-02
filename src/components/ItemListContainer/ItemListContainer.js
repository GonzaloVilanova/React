import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.js";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [clientes, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://cd68d732-812d-4c3e-9c4b-18cbd9d8fb18.mock.pstmn.io/clientes")
      .then((res) => res.json())
      .then((json) => setUsers(json))
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
