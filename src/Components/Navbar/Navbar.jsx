import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="/src/assets/snazzy.png" alt="Logo" />
        <p>SnazzyCart</p>
      </div>
      
      <ul>
        <li onClick={() => setMenu("home")}>
          <Link style={{ textDecoration: "none", color:"#626262"}} to="/">Home</Link>
          {menu === "home" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link style={{ textDecoration: "none", color:"#626262"}} to="/men">Men</Link>
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link style={{ textDecoration: "none", color:"#626262"}} to="/women">Women</Link>
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none", color:"#626262"}} to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src="/src/assets/cart.png" alt="Cart" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
