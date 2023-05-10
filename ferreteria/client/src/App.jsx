import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Views/Home/Home.jsx";
import ProductPage from "../src/Views/ProductPage/ProductPage.jsx";
import About from "../src/Views/About/About.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Chatbot from "./Components/ChatBot/ChatBot.jsx";
import DetailProduct from "./Views/DetailProduct/DetailProduct.jsx";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/products" Component={ProductPage} />
          <Route path="/products/:id" Component={DetailProduct} />
          <Route path="/pruebas" Component={About} />
        </Routes>
        <Chatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;
