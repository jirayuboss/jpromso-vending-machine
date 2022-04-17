import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import UnderConstruction from "./pages/UnderConstruction";
import Products from "./pages/Products";

//Components
import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" caseSensitive={false} element={<UnderConstruction />} />
        <Route path="/products" caseSensitive={false} element={<Products />} />
        <Route path="/administrator" caseSensitive={false} element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}