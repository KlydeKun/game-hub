import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "054e642e03ba4631b029d37583cbfb66",
  },
});
