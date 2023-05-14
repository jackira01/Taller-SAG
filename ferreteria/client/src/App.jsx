import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Views/Home/Home.jsx";
import ProductPage from "../src/Views/ProductPage/ProductPage.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Chatbot from "./Components/ChatBot/ChatBot.jsx";
import DetailProduct from "./Views/DetailProduct/DetailProduct.jsx";
import FormContact from "./Views/Contact/Contact";
import ProductCard from "./Components/Card/CardDemo";
import CardDemo2 from "./Components/Card/CardDemo2";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/products" Component={ProductPage} />
          <Route path="/products/:id" Component={DetailProduct} />
          <Route path="/servicios" Component={FormContact} />
          <Route path="/pruebas" Component={CardDemo2} />
        </Routes>
        <Chatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;
