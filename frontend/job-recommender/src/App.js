import Header from "./components/Header";
import { useEffect } from "react";
import "./App.css";
function App() {
  const body = { username: "sefineh", password: "1234" };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/v1/token/access/", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((token) => {
        return token.json();
      });
      console.log(response);
    };
    fetchData();
  });
  return (
    <>
      <Header />;
    </>
  );
}
export default App;
