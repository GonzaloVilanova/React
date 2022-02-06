import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.js";
import "./ItemListContainer.css";
import { Spinner } from "reactstrap";

const ItemListContainer = ({ greeting }) => {
  const [clientes, setClientes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_MOCKVILANOVA_BASEURL}`)
      .then((res) => res.json())
      .then((json) => setClientes(json))

      .catch((error) => {
        console.log(error);
      });
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h4>{greeting}</h4>

      {isLoading ? (
        <Spinner color="primary" size="sm">
          Loading...
        </Spinner>
      ) : (
        <ItemList clientes={clientes}></ItemList>
      )}
    </div>
  );
};

export default ItemListContainer;
