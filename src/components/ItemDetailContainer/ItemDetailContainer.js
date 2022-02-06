import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import axios from "axios";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

const ItemDetailContainer = ({ greeting }) => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios(`${process.env.REACT_APP_MOCKVILANOVA_BASEURL}`).then((res) =>
      setClientes(res.data)
    );
  }, []);

  return (
    <div>
      <Link to={`/detail/${data.id}`}>
        <ItemDetail></ItemDetail>
      </Link>
    </div>
  );
};

export default ItemDetailContainer;
