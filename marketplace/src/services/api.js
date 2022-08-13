import axios from "axios";

const APi = axios.create({
  baseURL: 'http://localhost:3000',
});

export default APi;