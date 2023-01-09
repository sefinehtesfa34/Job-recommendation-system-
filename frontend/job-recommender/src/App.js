import Header from "./components/Header";
import { useContext, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import AuthContext, { AuthProvider } from "./context/AuthContext";
import Home from "./components/Home";
function App() {
  const body = { username: "sefineh", password: "1234" };
  const [token, setToken] = useState(null);
  localStorage.setItem("token", null);
  useEffect(() => {
    axios.post("/api/v1/token/access/", body).then((response) => {
      setToken(response.data);
      localStorage.setItem("token", JSON.stringify(token));
      console.log(localStorage.getItem("token"));
    });
  }, []);

  return (
    <>
      <Header />;
      <AuthProvider>
        <Home />
        
      </AuthProvider>
    </>
  );
}
export default App;
