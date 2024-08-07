import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { getMyProfileSpotifyApi } from "../../../Services/User/userApi";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getMyProfileSpotifyApi();
      setUser(response);
    };
    fetchUser();
  }, []);

  return (
    <div className={styles.profile}>
      <h1>Profile Details</h1>
      <div className={styles.profileDetails}>
        <img
          src={user?.images[0]?.url || "/assets/profile.png"}
          alt={`${user?.display_name}'s profile`}
          className={styles?.profileImage}
        />
        <h2>{user?.display_name}</h2>
        <p>Email: {user?.email}</p>
        <p>Followers: {user?.followers?.total}</p>
        <div className={styles.profileLinks}>
          <a href="/artists" className={styles.profileLink}>
            Lets Search artists and view their albums
          </a>
          <a
            href={user?.external_urls?.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profileLink}
          >
            View Spotify Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
