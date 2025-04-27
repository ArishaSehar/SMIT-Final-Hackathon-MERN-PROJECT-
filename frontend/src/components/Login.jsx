import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { username, password });
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <form className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        className="w-full p-2 border rounded mb-4" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="w-full p-2 border rounded mb-4" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button 
        onClick={handleLogin} 
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
