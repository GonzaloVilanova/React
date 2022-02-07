import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import axios from "axios";

// REACT ROUTER DOM
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [deudor, setCliente] = useState([]);

  let id = useParams();
  let idDeudor = id.id;

  useEffect(() => {
    axios(`${process.env.REACT_APP_MOCKVILANOVA_BASEURL}?id=${idDeudor}`).then(
      (res) => setCliente(res.data)
    );
  }, [idDeudor]);
  console.log(deudor);

  return (
    <div>
      {deudor.map((deudor) => (
        <ItemDetail key={deudor.id} deudor={deudor}></ItemDetail>
      ))}
    </div>
  );
};

export default ItemDetailContainer;
