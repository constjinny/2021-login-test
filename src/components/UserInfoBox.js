import React from "react";
import profileSample from "@assets/images/profileSample.png";

export function UserInfoBox({ userData }) {
  const { nickName, description, profileUrl } = userData;
  const checkNickName = nickName || "유저";
  const checkDescription = description || "소개글 없음";
  const checkProfile = profileUrl || profileSample;

  return (
    <div className="user_box">
      <div className="user_inner">
        <div className="box_profile">
          <img src={checkProfile} alt={`${checkNickName}의 프로필 사진`} />
        </div>
        <div className="box_info">
          <strong>{checkNickName}</strong>
          <p>{checkDescription}</p>
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
