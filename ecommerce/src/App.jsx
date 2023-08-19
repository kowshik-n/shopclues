import { useState } from "react";
import "./App.css";
import HomePage from "./components/homepage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutProduct from "./components/categories/AboutProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/"></Route>
          <Route element={<AboutProduct />} path="/about"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
