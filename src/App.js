import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./Components/Preloader";
import NavBar from "./Components/Nav-bar";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Footer from "./Components/Footer";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
