import axios from "axios";

axios.defaults.headers.common.Authorization = `Client-ID ${
  import.meta.env.VITE_UNSPLASH_ACCESS_KEY
}`;
axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotos = async (query, page, per_page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page,
    },
  });
  return response.data;
};
