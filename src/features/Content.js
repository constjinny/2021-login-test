import React from "react";
import { useSelector } from "react-redux";
import { userStateSelector } from "@features/UserSlice";
import { UserInfoBox } from "@components";

export function Content({ children }) {
  const { authStatus, userData } = useSelector(userStateSelector.getAllData);

  return (
    <article>
      <div className="cont_box">{children}</div>

      <UserInfoBox authStatus={authStatus} userData={userData} />
    </article>
  );
}
