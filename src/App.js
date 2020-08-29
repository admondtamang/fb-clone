import React from "react";
import "./App.css";
import { Login, Home } from "./pages";

function App() {
  const user = null;
  return <div className="App">{!user ? <Login /> : <Home />}</div>;
}

export default App;
