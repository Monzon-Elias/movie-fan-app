import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Movie from "./Movie";

function App() {
  return (
    <div className="App">
      <Router basename="/movie-fan-app">
        <div className="App">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/movie/:movieId" component={Movie}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
