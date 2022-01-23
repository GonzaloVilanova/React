import "./App.css";
import React from "react";

//Componentes
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// Main APP
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header title="Sinergia CC" />
        <ItemListContainer greeting="Bienvenido Gonzalo!" />
        <div className="ListadoDeudas">
          <Cards
            img="../assets/img/cenco.png"
            Cliente="Cencosud"
            Saldo="$8500"
            Cuenta="PS003333"
          />
          <Cards
            img="../assets/img/naranja.png"
            Cliente="Tarjeta Naranja"
            Saldo="$17200"
            Cuenta="PS005488"
          />
        </div>
      </div>
    );
  }
}

export default App;
