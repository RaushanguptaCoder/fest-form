import { React } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="container">
        <Link to="/" className="links">
          <h1 className="heading">Ecomm</h1>
        </Link>
        <div className="nav-items">
          <Link to="/contact" className="links">
            Contact us
          </Link>
          <Link to="/about" className="links">
            About us
          </Link>
          <Link to="/review" className="links">
            Reviews
          </Link>
          <Link to="/FAQ" className="links">
            FAQ
          </Link>
          <Link to="/Categories" className="links">
            Categories
          </Link>
        </div>
        <div className="Login-cart">
        <Link to="/Cart" className="links">
            Cart
        </Link>
         <Link to="/Login" className="links">
           Login
        </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
