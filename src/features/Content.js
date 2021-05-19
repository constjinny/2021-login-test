import React from "react";
import { UserInfoBox } from "@components";

export function Content({ children }) {
  return (
    <article>
      <div className="cont_box">{children}</div>
      <UserInfoBox />
    </article>
  );
}
