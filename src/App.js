import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Home from "./Home";
import GridExamples from "./lessons/grid/GridExamples";
import CodeDemo from './lessons/grid/CodeDemo'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <React.StrictMode>
      <div>
        <Navbar />
        <Router>
          <Home path="/" />
          <GridExamples path="/grid-examples/example-1" />
          <CodeDemo path="/grid-examples/code-demo" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById("root"));
