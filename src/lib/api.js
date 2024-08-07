import axios from "axios";
import i18next from "i18next";

const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

api.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem("spotifyToken");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      config.headers["accept-language"] = i18next.language;

      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
