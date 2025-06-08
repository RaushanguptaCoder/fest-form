import { React } from "react";
import Nav from "./components/Nav";
// import Coun from "./components/coun.jsx"
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Review from "./components/Review";
import FAQ from "./components/FAQ";
import Categories from "./components/Categories";
import Login from "./components/Login";
import Cart from "./components/Cart";

const App = () => {
  // let login = false;
  return (
  <>
    <div className="bg-red-100 min-h-screen">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/review" element={<Review />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Categories" element={<Categories />} /> {/* <-- Fix here */}
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
    </>
  );
};

export default App;
