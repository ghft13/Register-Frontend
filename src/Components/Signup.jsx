import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseurl } from "./Backserver";
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [flashMessage, setFlashMessage] = useState({ message: "", type: "" });
  const navigate = useNavigate();

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
        `${baseurl}/api/auth/register`,
        formData,
        {
          Credentials: true,
        }
      );

      setFlashMessage({
        message: response.data.message,
        type: response.data.type,
      });

      if (response.data.type === "success") {
        navigate("/Services");
      }

      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error registering user:", error);
      if (error.response && error.response.data) {
        setFlashMessage({
          message: error.response.data.message,
          type: "error",
        });
      } else {
        setFlashMessage({ message: "An error occurred", type: "error" });
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
      {flashMessage.message && (
        <div
          className={`flash-message text-center fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg transition duration-500 ease-in-out ${
            flashMessage.type === "error"
              ? "bg-red-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {flashMessage.message}
        </div>
      )}
      <div className="w-full max-w-sm bg-blue-400 rounded-lg shadow-md p-10 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
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
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
