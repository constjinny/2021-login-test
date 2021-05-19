import React from "react";
import { Button } from "@components";

export function Footer() {
  const handleClickSignIn = () => {};
  const handleClickSignUp = () => {};

  return (
    <footer>
      <div className="group_row">
        <Button label="GitHub" onClick={handleClickSignIn} />
        <Button label="GitBook" onClick={handleClickSignUp} />
      </div>
      <small>constjinny@gmail.com</small>
    </footer>
  );
}
