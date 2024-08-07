import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./SingleArtist.module.scss";
import { SpotifyGetAlbumApi } from "../../../Services/User/userApi";
import Album from "../../../Components/Album/Album";

const SingleArtist = () => {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await SpotifyGetAlbumApi(id);
      setAlbums(data?.items);
    };
    fetchData();
  }, [id]);
  console.log(albums);
  console.log("id..", id);
  return (
    <div className={styles.singleArtist}>
      <h1>Artist Name : {name}</h1>
      <h2>{name}'s Albums</h2>
      <div className={styles.albums}>
        {albums?.map((album) => (
          <Album album={album} />
        ))}
      </div>
    </div>
  );
};

export default SingleArtist;
