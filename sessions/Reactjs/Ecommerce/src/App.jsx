import { React } from "react";
import Nav from "./components/Nav";
// import Coun from "./components/coun.jsx"
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Review from "./components/Review";
import FAQ from "./components/FAQ";

const App = () => {
  // let login = false;
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/review" element={<Review />} />
          <Route path="/FAQ" element={<FAQ />} />
          
        </Routes>
      </Router>
    </>
  );
};

export default App;
