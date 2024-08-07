import React from "react";
import styles from "./Login.module.scss";
import useLoginRedirect from "../../../hooks/useLoginRedirect";

const Login = () => {
  useLoginRedirect();
  const handleSpotifyLogin = () => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const redirectUri = "http://localhost:5173/callback";
    const scopes = ["user-read-private", "user-read-email"];
    const authEndpoint = "https://accounts.spotify.com/authorize";

    const authUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(
      scopes.join(" ")
    )}&response_type=token&show_dialog=true`;

    window.location.href = authUrl;
  };

  return (
    <div>
      <div className={styles.login}>
        <div className={styles.login_container}>
          <button className={styles.login_button} onClick={handleSpotifyLogin}>
            <h3>Login with Spotify</h3>
            <img src="/assets/logo-black.png" alt="spotify" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
