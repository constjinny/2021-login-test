import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "@components";

export function MyPage() {
  const { push } = useHistory();

  const initUserData = {
    nickName: "곽두팔",
    id: "ididiidd",
    password: "dkdkwdow",
    description: "소개한다.",
    profileUrl: "",
  };
  const [userData, setUserData] = React.useState(initUserData);
  const isFullFill = userData?.nickName !== "";

  const handleUpdateNickName = (nickName) =>
    setUserData({ ...userData, nickName });

  const handleUpdateDescription = (description) =>
    setUserData({ ...userData, description });

  const handleClickUpdate = () => {};

  const handleClickCancle = () => push("/");

  // comp
  const NickNameInput = (
    <Input
      id="userNickName"
      value={userData?.nickName || ""}
      placeholder="닉네임을 입력하세요."
      onChange={handleUpdateNickName}
    />
  );

  const DescriptionInput = (
    <Input
      id="userDescription"
      value={userData?.description || ""}
      placeholder="소개글을 입력하세요."
      onChange={handleUpdateDescription}
    />
  );

  return (
    <div>
      <div>
        <Form title="Id">{userData?.id || "곽두팔"}</Form>
        <Form title="NickName">{NickNameInput}</Form>
        <Form title="Description">{DescriptionInput}</Form>
      </div>
      <div className="group_column top_space">
        <Button
          label="Update"
          isDisabled={!isFullFill}
          onClick={handleClickUpdate}
        />
        <Button label="Cancle" onClick={handleClickCancle} />
      </div>
    </div>
  );
}
