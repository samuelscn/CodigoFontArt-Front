import React, { Component } from "react";
import api from "./services/api";
import Routes from './routes';

import './styles.css'

import Header from './components/Header';
import Main from './pages/main'
import NavBar from './components/NavBar';
import Top from './components/Top';
import Rodape from './components/Rodape';

const App = () => (
    <div className="App">
        <Top/>
        <Header/>
        <NavBar/>
        <Routes/>
        <Rodape/>
    </div>
);

export default  App;
