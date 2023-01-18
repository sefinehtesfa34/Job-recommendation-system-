import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
