import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="MainContent">
          <Route path="/" exact component={Home} ></Route>
          <Route path="/about" exact component={About} ></Route>
          <Route path="/gallery" exact component={Gallery} ></Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
