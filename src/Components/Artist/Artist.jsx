import React from "react";
import styles from "./Artist.module.scss";
import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router-dom";

const convertPopularityToStars = (popularity) => {
  return (popularity / 20).toFixed(1);
};

const Artist = ({ artist }) => {
  const navigate = useNavigate();

  const handleArtistClick = () => {
    navigate(`/artist/${artist?.id}?name=${artist?.name}`);
  };

  return (
    <div className={styles.artistCard} onClick={handleArtistClick}>
      <div className={styles.artistImage}>
        <img src={artist?.images[0]?.url} alt={artist?.name} />
      </div>
      <div>{artist?.name}</div>
      {/* <div>Popularity: {artist?.popularity}</div> */}
      <div>{artist?.followers?.total.toLocaleString()} followers</div>
      <StarRatings
        rating={parseFloat(convertPopularityToStars(artist?.popularity))}
        starRatedColor="gold"
        numberOfStars={5}
        starDimension="24px"
        starSpacing="2px"
        isSelectable={false}
        isAggregateRating={true}
      />
    </div>
  );
};

export default Artist;
