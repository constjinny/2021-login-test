import React from "react";
import { Input, Button } from "@components";

export function SignIn() {
  const initUserData = { id: "", password: "" };
  const [userData, setUserData] = React.useState(initUserData);
  const isFullFill = userData?.id !== "" && userData?.password !== "";

  const handleUpdateId = (id) => setUserData({ ...userData, id });

  const handleUpdatePassword = (password) =>
    setUserData({ ...userData, password });

  const handleClickSignIn = () => {};

  const handleClickSignUp = () => {};

  return (
    <div>
      <div className="group_column">
        <Input
          id="userId"
          value={userData?.id || ""}
          placeholder="아이디를 입력하세요."
          onChange={handleUpdateId}
        />
        <Input
          id="userPassword"
          type="password"
          value={userData?.password || ""}
          placeholder="비밀번호를 입력하세요."
          onChange={handleUpdatePassword}
        />
      </div>
      <div className="group_column top_space">
        <Button
          label="SignIn"
          isDisabled={!isFullFill}
          onClick={handleClickSignIn}
        />
        <Button label="SignUp" onClick={handleClickSignUp} />
      </div>
    </div>
  );
}
