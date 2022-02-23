import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.js";
import "./ItemListContainer.css";
import { Spinner } from "reactstrap";

// FIREBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
  const [clientes, setClientes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Firebase useEffect
  useEffect(() => {
    const getDeudas = async () => {
      const q = query(collection(db, "deudas"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setClientes(docs);
    };
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    getDeudas();
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
