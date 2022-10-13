// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./Component/Cart";

import Header from "./Component/Header";
import Home from "./Component/Home";

function App() {
  // const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
