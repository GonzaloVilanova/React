import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

// REACT ROUTER DOM

import { useParams } from "react-router-dom";

// FIREBASE - FIRESTORE
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [deudor, setCliente] = useState([]);

  const { id } = useParams();

  //Firebase useEffect
  useEffect(() => {
    const getDeuda = async () => {
      const q = query(collection(db, "deudas"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setCliente(docs);
    };

    getDeuda();
  }, [id]);

  return (
    <div>
      {deudor.map((deudor) => (
        <ItemDetail key={deudor.id} deudor={deudor}></ItemDetail>
      ))}
    </div>
  );
};

export default ItemDetailContainer;
