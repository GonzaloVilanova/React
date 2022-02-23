import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./DueTypes.css";
// REACT ROUTER DOM

import { useParams } from "react-router-dom";

// FIREBASE - FIRESTORE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";

const DueTypes = () => {
  const [deudaPorEmpresa, setDeudaPorEmpresa] = useState([]);

  const { empresa } = useParams();

  //Firebase useEffect
  useEffect(() => {
    const getDeudaAgrupada = async () => {
      const q = query(
        collection(db, "deudas"),
        where("empresa", "==", empresa)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setDeudaPorEmpresa(docs);
    };

    getDeudaAgrupada();
  }, [empresa]);

  return (
    <div className="itemList-wrap">
      {deudaPorEmpresa.map((deudor) => (
        <ItemDetail key={deudor.id} deudor={deudor}></ItemDetail>
      ))}
    </div>
  );
};

export default DueTypes;
