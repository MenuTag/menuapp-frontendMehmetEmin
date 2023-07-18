import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { FiFlag } from 'react-icons/fi'
import { useState } from 'react';
import { Button, Card, Container, Row, Dropdown } from 'react-bootstrap';
import logo from './images/logo.jpg'
import fb from './images/facebook_logo.png'
import ig from './images/instagram_logo.png'
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home  from './pages/Home';
import Categories from './pages/Categories';


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Categories' element={<Categories/>} />
        </Routes>
    </BrowserRouter>
  );
}


export default App;
