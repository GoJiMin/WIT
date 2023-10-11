import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <h1>
        <Link to='/'>WIT</Link>
      </h1>
      <div>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </header>
  );
}
