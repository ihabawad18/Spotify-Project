import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem("spotifyToken");
    const expirationTime = localStorage.getItem("spotifyTokenExpiration");
    console.log("aaaa ", token, expirationTime, new Date().getTime());
    if (
      location.pathname !== "/callback" &&
      (!token || new Date().getTime() > expirationTime)
    ) {
      setIsLoggedIn(false);
      navigate("/login");
    } else {
      if (!isLoggedIn) {
        setIsLoggedIn(true);
      }
    }
  }, [navigate]);
  console.log(isLoggedIn);
  const handleLogout = () => {
    localStorage.removeItem("spotifyToken");
    localStorage.removeItem("spotifyTokenExpiration");
    navigate("/login");
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/assets/logo.png" alt="logo" />
        <h1>Welcome to Spotify+</h1>
      </div>
      <div className={styles.loginLink}>
        {isLoggedIn ? (
          <>
            <Link to="/profile">Profile</Link>
            <a
              style={{ marginLeft: "15px", cursor: "pointer" }}
              onClick={handleLogout}
            >
              Logout
            </a>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
