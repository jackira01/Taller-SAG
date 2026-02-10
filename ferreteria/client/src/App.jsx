import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../src/Views/Home/Home.jsx';
import ProductPage from '../src/Views/ProductPage/ProductPage.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import Chatbot from './Components/ChatBot/ChatBot.jsx';
import FormContact from './Views/Contact/Contact';
import LoginPage from './Components/Login/LoginPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <NavBar />
        <main className='App main-content'>
          <Routes>
            <Route path='/inicio' element={<Home />} />
            <Route path='/productos' element={<ProductPage />} />
            <Route path='/servicios' element={<FormContact />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<Navigate to='/inicio' />} />
          </Routes>
          <Chatbot />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
