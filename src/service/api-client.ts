import axios from "axios";

export default axios.create({
  baseURL: "https://fakestoreapi.com/",
});

// axios.defaults.headers.common['Authorization'] =
// 	localStorage.getItem('app-maxway-token')
