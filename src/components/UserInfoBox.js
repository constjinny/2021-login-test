import React, { Fragment } from "react";

export function UserInfoBox({ authStatus, userData }) {
  const { nickName, description, profileUrl } = userData;
  const checkNickName = nickName || "유저";
  const checkDescription = description || "소개글 없음";
  const checkProfile = profileUrl || "";

  return (
    <div className="user_box">
      <div className="user_inner">
        <div className="box_profile">
          {checkProfile && (
            <img src={checkProfile} alt={`${checkNickName}의 프로필 사진`} />
          )}
        </div>
        <div className="box_info">
          {authStatus ? (
            <Fragment>
              <strong>{checkNickName}</strong>
              <p>{checkDescription}</p>
            </Fragment>
          ) : (
            <strong>로그인을 해주세요.</strong>
          )}
        </div>
      </div>
    </div>
  );
}

UserInfoBox.defaultProps = {
  userData: {
    id: null,
    nickName: "알 수 없는 유저",
    description: "로그인을 해주세요.",
    profileUrl: "",
  },
};
