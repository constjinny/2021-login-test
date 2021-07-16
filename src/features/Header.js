import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userStateAction, userStateSelector } from "@features/UserSlice";

export function Header() {
  const dispatch = useDispatch();
  const authStatus = useSelector(userStateSelector.getAuthStatus);

  const handleSignOut = () => dispatch(userStateAction.userSignOut());

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
        {authStatus ? (
          <button type="button" className="btn_text" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </div>
    </header>
  );
}
