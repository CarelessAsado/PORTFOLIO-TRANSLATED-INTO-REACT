import axios from "axios";
import { BACKEND_ROOT } from "../constants";

export default axios.create({
  baseURL: BACKEND_ROOT,
});
