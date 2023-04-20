// import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Views/Home/Home.jsx";
import ProductPage from "../src/Views/ProductPage/ProductPage.jsx";
import About from "../src/Views/About/About.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/products" Component={ProductPage} />
          <Route path="/about" Component={About} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
