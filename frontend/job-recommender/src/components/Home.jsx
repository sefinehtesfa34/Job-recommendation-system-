import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
const Home = () => {
    const body = { username: "sefineh", password: "1234" };
    const context = useContext(AuthContext)
    console.log(context)
    useEffect(() => {
      context.loginUser(body.username, body.password)
      },[]);
  return (
    <div>
      <p>Welcome</p>
    </div>
  );
};

export default Home;
