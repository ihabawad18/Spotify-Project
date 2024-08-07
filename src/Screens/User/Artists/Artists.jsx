import React, { useEffect, useState } from "react";
import styles from "./Artists.module.scss";
import { SpotifySearchApi } from "../../../Services/User/userApi";
import Artist from "../../../Components/Artist/Artist";
import { useDispatch, useSelector } from "react-redux";
import { setArtists, setSearchTerm } from "../../../redux/Artists/artistsSlice";
import { fetchArtists } from "../../../redux/Artists/artistsThunks";

const Artists = () => {
  const dispatch = useDispatch();
  const { artists, searchTerm } = useSelector((state) => state.artists);
  const [search, setSearch] = useState(searchTerm);
  const [artistsData, setArtistsData] = useState(artists);

  //   const handleSearchChange = async (e) => {
  //     if (e.target.value === "") {
  //       //   setArtists([]);
  //       //   setSearch("");
  //       dispatch(setArtists([]));
  //       dispatch(setSearchTerm(""));
  //       return;
  //     }
  //     const search = e.target.value;
  //     const artistsResponse = await SpotifySearchApi(search, "artist");
  //     // setArtists(artistsResponse.artists.items);
  //     // setSearch(search);
  //     dispatch(setArtists(artistsResponse.artists.items));
  //     dispatch(setSearchTerm(search));
  //   };
  useEffect(() => {
    setArtistsData(artists);
  }, [artists]);
  //   useEffect(() => {
  //     setSearch(searchTerm);
  //   }, [searchTerm]);
  const handleSearchChange = (e) => {
    const search = e.target.value;
    setSearch(search);
    dispatch(fetchArtists(search));
  };
  console.log("artists..", artists);
  console.log("searchTerm..", searchTerm);
  return (
    <div className={styles.ArtistsWrapper}>
      <h1 className={styles.ArtistsTitle}>Artists</h1>
      <div className={styles.ArtistsSearchWrapper}>
        <div className={styles.ArtistsSearch}>
          <input
            type="text"
            placeholder="Search artists"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className={styles.ArtistsContainer}>
          {artists.length > 0 ? (
            <div className={styles.DisplayArtists}>
              {artistsData?.map((artist) => (
                <Artist key={artist.id} artist={artist} />
              ))}
            </div>
          ) : (
            <p className={styles.ArtistsDescription}>
              Discover artists that you may like based on your search and start
              exploring their albums today.{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Artists;
