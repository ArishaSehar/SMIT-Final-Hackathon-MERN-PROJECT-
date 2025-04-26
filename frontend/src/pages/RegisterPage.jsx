import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        fullName,
        email,
        password
      });
      console.log(res.data); // See if API responds correctly
      alert('Registration Successful');
      navigate('/');
    } catch (err) {
      console.error(err.response?.data); // Catch real API error message
      if (err.response?.data?.message) {
        alert(err.response.data.message); // Show backend error
      } else {
        alert('Registration failed!');
      }
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-lg w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
        <input
          className="border p-2 w-full mb-3"
          placeholder="Full Name"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-700 text-white w-full p-2 rounded"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
