import "./App.css";
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

//Componentes
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

// Main APP
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Header title="Sinergia CC" />
      <ItemListContainer greeting="Bienvenido Gonzalo!" />
      <div className="ListadoDeudas">
        <Cards
          img="../assests/img/cenco.png"
          cliente="Cencosud"
          saldo="$8500"
          cuenta="PS003333"
        />
        <Cards
          img="../assests/img/naranja.png"
          cliente="Tarjeta Naranja"
          saldo="$17200"
          cuenta="PS005488"
        />
        <div>
          <ItemCount stock={5} />
        </div>
      </div>
    </div>
  );
};

export default App;
