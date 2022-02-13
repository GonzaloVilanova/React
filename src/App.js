import "./App.css";
import React from "react";

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Componentes
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext";

//Views
import Home from "./views/Home/Home";
import Services from "./views/Services/Services";
import Contact from "./views/Contact/Contact";
import Payments from "./views/Payments/Payments";
import ItemDetail from "./views/Detail/ItemDetail";
import Detail from "./views/Detail/Detail";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

// Main APP
const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Header title="Centro de Gestion de Deudas" />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Payments" element={<Payments />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
