import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <h1>😎 LOGINTEST</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div>
        <Link to="/signup">Sign Up</Link>
      </div>
    </header>
  );
}
