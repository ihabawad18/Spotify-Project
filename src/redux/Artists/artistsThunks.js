import { setArtists, setSearchTerm } from "./artistsSlice";
import { SpotifySearchApi } from "../../Services/User/userApi";

export const fetchArtists = (search) => async (dispatch) => {
  if (search === "") {
    dispatch(setArtists([]));
    dispatch(setSearchTerm(""));
    return;
  }

  const artistsResponse = await SpotifySearchApi(search, "artist");
  dispatch(setArtists(artistsResponse.artists.items));
  dispatch(setSearchTerm(search));
};
