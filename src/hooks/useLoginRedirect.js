import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useLoginRedirect() {
  const navigate = useNavigate();
  const token = localStorage.getItem("spotifyToken");
  const expirationTime = localStorage.getItem("spotifyTokenExpiration");

  useEffect(() => {
    if (token && new Date().getTime() < expirationTime) {
      navigate("/profile");
    }
  }, [token, expirationTime, navigate]);
}

export default useLoginRedirect;
