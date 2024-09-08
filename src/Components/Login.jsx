import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { baseurl } from "./Backserver";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const location = useLocation();
  const navigate = useNavigate();
  const [flashMessage, setFlashMessage] = useState({ message: "", type: "" });

  // Check if there's a flash message passed via location state
  useEffect(() => {
    if (location.state && location.state.flashMessage) {
      setFlashMessage({
        message: location.state.flashMessage,
        type: "error",
      });
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${baseurl}/api/auth/login`, // Make sure this endpoint is correct
        formData,
        { withCredentials: true } // Include this to allow cookies to be sent
      );
      setFlashMessage({
        message: response.data.message,
        type: response.data.type,
      });

      if (response.data.type === "success") {
        navigate("/Appointment");
      }
      

      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error logging in:", error);
      if (error.response && error.response.data) {
        setFlashMessage({
          message: error.response.data.message,
          type: "error",
        });
      } else {
        setFlashMessage({
          message: "Something went wrong. Please try again.",
          type: "error",
        });
      }
    }
  };

  useEffect(() => {
    if (flashMessage.message) {
      const timer = setTimeout(() => {
        setFlashMessage({ message: "", type: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [flashMessage]);

  return (
    <div className="bg-signupcolor flex items-center justify-center h-screen">
      <div className="w-full max-w-sm bg-blue-600 rounded-lg shadow-md p-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {flashMessage.message && (
          <div
            className={`mb-4 p-2 text-white rounded ${
              flashMessage.type === "error" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {flashMessage.message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <Link
              to="/signup"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
