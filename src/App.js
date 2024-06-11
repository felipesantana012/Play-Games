import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detalhes from "./components/Detalhes/Index";
import Home from "./components/Home/Index";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:id" element={<Detalhes />} />
    </Routes>
  </Router>
  );
}
export default App;
