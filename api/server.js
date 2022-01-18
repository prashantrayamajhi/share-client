const Axios = require("axios");
const BASE_URL = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : "http://localhost:8080/api/v1";

module.exports = Axios.create({
  baseURL: BASE_URL,
});
