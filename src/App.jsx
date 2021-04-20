import React from "react";
import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default App;
