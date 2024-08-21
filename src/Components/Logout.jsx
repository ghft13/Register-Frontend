import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseurl } from "./Backserver";
const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post(`http://localhost:5000/api/auth/logout`, {}, {
          withCredentials: true,
        });
        localStorage.removeItem("token");
        navigate("/login"); // Redirect to login page after logout
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };
    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
