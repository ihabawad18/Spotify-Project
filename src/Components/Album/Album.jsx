import React from "react";
import styles from "./Album.module.scss";

const Album = ({ album }) => {
  return (
    <div className={styles.album}>
      <div className={styles.albumImage}>
        <img
          src={album.images[0].url}
          alt={`${album.name} cover`}
          className={styles.albumCover}
          draggable="false"
        />
      </div>
      <h2 className={styles.albumName}>{album.name}</h2>
      <div className={styles.albumArtists}>
        Artists Included:{" "}
        {album.artists.map((artist, index) => (
          <span key={artist.id}>
            {artist.name}
            {index < album.artists.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
      <p className={styles.albumReleaseYear}>
        Release Year: {new Date(album.release_date).getFullYear()}
      </p>
      <p className={styles.albumTracks}>Total Tracks: {album.total_tracks}</p>
      <div className={styles.albumLinkContainer}>
        <a
          href={album.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.albumLink}
        >
          Preview on Spotify
        </a>
      </div>
    </div>
  );
};

export default Album;
