import axios from "axios";
const API_URL = "http://localhost:3001/";

const createRequest = (config) => {
  const instance = axios.create();
  instance.defaults.headers["Accept"] = "application/json";
  instance.defaults.headers["Content-Type"] = "application/json";
  instance.defaults.baseURL = API_URL;

  return instance(config)
    .then((res) => {
      console.log("res", res.data);
      if (res.status === 200) {
        return res.data ? res.data : Promise.reject({ err: "no res.data" });
      } else {
        Promise.reject({ statusCode: res.status });
      }
    })
    .catch((err) => {
      return Promise.reject({ err: err });
    });
};

export default createRequest;
