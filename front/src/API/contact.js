import axios from "./axios";

export const sendData = (contactame) => {
  return axios.post("/", contactame);
};
