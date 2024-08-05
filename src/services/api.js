import axios from "axios";

const api = axios.create({
  baseURL: "https://tjrj-book-test-rest-api-f4h9f9cycmbgfrdc.eastus-01.azurewebsites.net/v1/",
});

export default api;