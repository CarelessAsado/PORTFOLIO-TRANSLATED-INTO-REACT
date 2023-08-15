import axios from "axios";
import { BACKEND_ROOT } from "utils/constants";

export default axios.create({
  baseURL: BACKEND_ROOT,
});
