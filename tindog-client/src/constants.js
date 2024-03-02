// export const BASE_URL =
//   "https://my-json-server.typicode.com/ChandanPk/json-placeholder-api";
// export const BASE_URL = "http://localhost:8001";
export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const API = {
  blogs: BASE_URL + "/blogs",
};

API.blogPage = (id) => BASE_URL + "/blogs/" + id;
