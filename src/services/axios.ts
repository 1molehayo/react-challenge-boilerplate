import _axios from "axios";

const axios = _axios.create({
  baseURL: "https://dashboard.api.staging.core.primer.io",
  timeout: 180000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axios;
