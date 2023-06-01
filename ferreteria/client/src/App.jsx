import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Views/Home/Home.jsx";
import ProductPage from "../src/Views/ProductPage/ProductPage.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Chatbot from "./Components/ChatBot/ChatBot.jsx";
import FormContact from "./Views/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/productos" Component={ProductPage} />
          <Route path="/servicios" Component={FormContact} />
        </Routes>
        <Chatbot />
      </div>

    </BrowserRouter>
  );
}

export default App;
