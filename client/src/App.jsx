import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LotList from "./pages/LotList";
import Griege from "./pages/Griege";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Griege />} />
        <Route path="/lotlist" element={<LotList />} />
      </Routes>
    </Router>
  );
};

export default App;
