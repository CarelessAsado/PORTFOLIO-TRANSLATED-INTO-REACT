import axios from "./axios";

export const sendData = (contactame) => {
  return axios.post("/", contactame);
};

export const getUser = () => {
  return axios.get("/");
};
