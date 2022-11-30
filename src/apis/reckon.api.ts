import axios from "axios";

const reckonApi = axios.create({
  baseURL: "https://join.reckon.com/",
});

export default reckonApi;
