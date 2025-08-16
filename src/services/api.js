import axios from "axios";

axios.defaults.headers.common.Authorization = `Client-ID vPGicYQfmcCL2RmGWhY-0YiOcYvbDAKvPZ70mt48bjU`;
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
