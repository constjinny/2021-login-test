import createRequest from "./index";

/**
 * 유저 로그인
 * @param {*} userData : {id, password}
 */
const postUserSignIn = (userData) => {
  const REQUEST_CONFIG = {
    method: "post",
    url: "login",
    data: {
      id: userData?.id,
      password: userData?.password,
    },
  };
  return createRequest(REQUEST_CONFIG);
};

/**
 *  유저 로그아웃
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
