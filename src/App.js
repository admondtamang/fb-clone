import React, { useState } from "react";
import "./App.css";
import { Login, Home } from "./pages";
import { useSelector } from "react-redux";
import Modal from "./components/Modal/Modal";

function App() {
  const user = useSelector((state) => state.user);
  // const user = null;
  return <div className="App">{!user ? <Login /> : <Home />}</div>;
}

export default App;
