import createRequest from "./index";

/**
 * 특정 오더 데이터 가져오기
 * @param {*} userData : sign in user id, password
 */
const postUserSignIn = (userData) => {
  const REQUEST_CONFIG = {
    method: "post",
    url: "login",
    data: {
      userData,
    },
  };
  return createRequest(REQUEST_CONFIG);
};

/**
 *  특정 유저 데이터 삭제
 * @param {*} id : sign out user id
 */
const removeSignInUser = (id) => {
  const REQUEST_CONFIG = {
    method: "delete",
    url: `user/${id}`,
  };
  return createRequest(REQUEST_CONFIG);
};

export const userApi = { postUserSignIn, removeSignInUser };
