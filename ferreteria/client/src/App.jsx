// import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Views/Home/Home.jsx";
import ProductPage from "../src/Views/ProductPage/ProductPage.jsx";
import About from "../src/Views/About/About.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Contact from "./Views/Contact/Contact.jsx";
import Chatbot from "./Components/ChatBot/ChatBot.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/products" Component={ProductPage} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Chatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;
