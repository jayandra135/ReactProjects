import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarComp from "./components/NavbarComp";

import MyContext from "./components/contextApi/MyContext";
import Movie from "./components/Movie";
//import SingleMovie from "./components/SingleMovie";

function App() {
  return (
    <MyContext>
      <div className="App">
        <Router>
          <NavBarComp />
          <Routes>
            <Route path="/" element={<Movie />} />
          </Routes>
        </Router>
      </div>
    </MyContext>
  );
}

export default App;
