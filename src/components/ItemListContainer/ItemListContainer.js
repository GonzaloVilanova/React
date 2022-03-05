import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.js";
import "./ItemListContainer.css";
import { Spinner } from "reactstrap";
import { NavItem } from "reactstrap";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

//IMG
import cenco from "../../assests/img/cenco.png";
import naranja from "../../assests/img/naranja.png";
import vivus from "../../assests/img/vivus.jpg";

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
      <ul className="BarraFilter">
        <li>
          Acá podes ver TODAS las deudas. Sino podes ingresar en las opciones
          para filtrar por EMPRESA:
        </li>
        <li>
          <NavItem>
            <Link to="/DueTypes/Cencosud">
              {" "}
              <img className="Logo" src={cenco} alt="logo-cenco" />
            </Link>
          </NavItem>
        </li>
        <li>
          {" "}
          <NavItem>
            <Link to="/DueTypes/Tarjeta Naranja">
              {" "}
              <img className="Logo" src={naranja} alt="logo-naranja" />{" "}
            </Link>
          </NavItem>
        </li>
        <li>
          {" "}
          <NavItem>
            <Link to="/DueTypes/Vivus">
              {" "}
              <img className="Logo" src={vivus} alt="logo-vivus" />{" "}
            </Link>
          </NavItem>
        </li>
      </ul>

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
