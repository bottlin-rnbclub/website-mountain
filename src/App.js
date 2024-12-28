import React from "react";
import Header from './components/Header';
import Main from './components/Main';
import Condition from './components/Condition';
import Content from './components/Content';
import Events from './components/Events';
import Ticket from "./components/Ticket";
import Footer from './components/Footer';
import './App.css';


export default function App () {
  return (
    <div className="app">
      <Header />
      <Main />
      <Condition />
      <Content />
      <Events />
      <Ticket />
      <Footer />
    </div>
  );
};