import axios from "axios";

const omdbApi = axios.create({
  baseURL: "https://omdbapi.com",
  params: {
    apikey: "fc1fef96",
  },
});

export const GetMovies = async () => {
  try {
    const response = await omdbApi.get("/?s=all&page=2");
    if (response.status !== 200) {
      throw new Error("Error fetching movie");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const GetSearchMovies = async (search) => {
  if (search !== "") {
    try {
      const response = await omdbApi.get(`/?s=${search}`);
      if (response.status !== 200) {
        throw new Error("Error fetching movie");
      } else {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
};
