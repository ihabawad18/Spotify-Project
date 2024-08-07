import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artists: [],
  searchTerm: "",
};

const artistsSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    setArtists(state, action) {
      state.artists = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setArtists, setSearchTerm } = artistsSlice.actions;

export default artistsSlice.reducer;
