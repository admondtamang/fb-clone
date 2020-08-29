import React, { useState } from "react";
import "./App.css";
import { Login, Home } from "./pages";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  return <div className="App">{!user ? <Login /> : <Home />}</div>;
}

export default App;
