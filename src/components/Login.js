import React, { useState } from "react";
import "./Allcss.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");

  
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // Make a POST request to your server with user data
      const response = await axios.post("http://localhost:3003/login", {
        Name,
        Password,
      });

      // Check the response from the server and navigate accordingly
      if (response.data.success) {
        // Assuming the server sends a success flag
        navigate("/Mainpage");
      } else {
        // Handle login failure (e.g., show an error message)
        console.error("Login failed");
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error sending POST request:", error);
    }
  }

  return (
    <>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder=""
              name="Name" 
              required
            />
            <label>UserName</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder=""
              name="Password" // Give a name attribute to the input
              required
            />
            <label>Password</label>
          </div>
          <div className="user-box">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
