import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2c474d95ea424dfcbbfd212fe07166d5",
  },
});
