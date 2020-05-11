import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Home from "./Home";
import GridExamples from "./lessons/grid/GridExamples";
import MondrianPainting from './lessons/grid/MondrianPainting'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {

  return (
    <React.StrictMode>
      <div className="page-container">
        <Navbar />
        <Router>
          <Home path="/" />
          <GridExamples path="/grid-examples/example-1" />
          <MondrianPainting path="/grid-examples/code-demo" />
        </Router>
        <Footer />
      </div>
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById("root"));
