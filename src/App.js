import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from './pages/Home';
import About from './pages/About';
import GalleryComponent from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="MainContent">
          <Switch>
          <Route path="/" exact component={Home} ></Route>
          <Route path="/about" exact component={About} ></Route>
          <Route path="/gallery" exact component={GalleryComponent} ></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
