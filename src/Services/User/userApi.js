import api from "../../lib/api";

export const SpotifySearchApi = async (search, type) => {
  try {
    const response = await api.get(`/search?q=${search}&type=${type}`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error.response.data));
  }
};

export const SpotifyGetAlbumApi = async (id) => {
  try {
    const response = await api.get(`/artists/${id}/albums`);
    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error.response.data));
  }
};

export const getMyProfileSpotifyApi = async () => {
  try {
    const response = await api.get(`/me`);
    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error.response.data));
  }
};
