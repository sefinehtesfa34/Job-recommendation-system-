import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  
  const [token, setToken] = useState(() => {
    const authToken = localStorage.getItem("token");
    return authToken ? JSON.parse(authToken) : null;
  });

  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true);

  const loginUser = async (username, password) => {
    const response = await fetch("/api/v1/token/access/", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "Application/json",
      },
    });
    const data = await response.json();
    console.log(data)

    if (response.status === 200) {
      setToken(data);
      setUser(jwt_decode(data["access"]));
      localStorage.setItem("token", JSON.stringify(data));
    } else {
      alert("Something went wrong!");
    }
  };
console.log(localStorage.getItem('token'))
  const logout = () => {
    setToken(null);
    // setUser(null);
    localStorage.removeItem("token");
  };

  const contextData = {
    token,
    // user,
    loading,
    setToken,
    // setUser,
    setLoading,
    loginUser,
    logout,
  };

  useEffect(() => {
    if (token) {
      // setUser(jwt_decode(token.access));
    }
    setLoading(false);
  }, [token, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {/* {loading ? null : children} */}
    </AuthContext.Provider>
  );
};

export default AuthContext
