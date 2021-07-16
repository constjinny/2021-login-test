import axios from "axios";
const API_URL = "http://localhost:3001/";

const createRequest = (config) => {
  const instance = axios.create();
  instance.defaults.headers["Accept"] = "application/json";
  instance.defaults.headers["Content-Type"] = "application/json";
  instance.defaults.baseURL = API_URL;

  return instance(config)
    .then((res) => {
      if (res.status === 200) {
        const checkData = res.data;

        if (checkData) {
          console.log("checkData", checkData);
          return checkData;
        } else {
          throw new Error({ err: "no res.data" });
        }
      } else {
        return { statusCode: res.status };
      }
    })
    .catch((err) => {
      return { err: err };
    });
};

export default createRequest;
