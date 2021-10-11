const Axios = require("axios");
const BASE_URL = "http://localhost:8080/api/v1";

module.exports = Axios.create({
  baseURL: BASE_URL,
});
