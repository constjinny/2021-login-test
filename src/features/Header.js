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
          <Link to="/mypage">MyPage</Link>
        </li>
      </ul>
      <div>
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
  );
}
