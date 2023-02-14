import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from './pages/Login'
import SignUp from "./pages/SignUp";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path ='/login' element = {<SignIn/>}></Route>
        <Route path ='/signup' element = {<SignUp/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
