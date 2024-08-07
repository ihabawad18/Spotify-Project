import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SpotifyCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get("access_token");
    const expiresIn = params.get("expires_in");
    if (accessToken && expiresIn) {
      const expirationTime = new Date().getTime() + expiresIn * 1000;
      localStorage.setItem("spotifyToken", accessToken);
      localStorage.setItem("spotifyTokenExpiration", expirationTime.toString());
      console.log(accessToken, expiresIn);

      navigate("/profile");
    }
  }, [navigate]);

  return (
    <div>
      <h2>Logging in...</h2>
    </div>
  );
};

export default SpotifyCallback;
