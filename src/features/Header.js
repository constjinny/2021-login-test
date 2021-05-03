import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <h1>
        <span className="material-icons">sentiment_very_satisfied</span>
        test login
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      <div>
        <span className="material-icons">login</span>
        <span className="material-icons">face</span>
        <span className="material-icons">logout</span>
      </div>
    </header>
  );
}
