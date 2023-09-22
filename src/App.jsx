import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import TourPackage from "./pages/TourPackage";
import DetailPackage from "./pages/DetailPackage";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/tour-package" element={<TourPackage/>}/>
        <Route path="/tour-package/:tourPackageId" element={<DetailPackage/>}/>
      </Routes>
    </Router>
    
      
    </>
  )
}

export default App;