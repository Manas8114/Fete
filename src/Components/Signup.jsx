import React, { useState } from "react";
import axios from "axios";

const Signup = ({ setIsLoggedIn, setShowSignup }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', { username, email, password });
      localStorage.setItem('token', res.data.token);
      setMessage("✅ Signup successful! Please login.");
      setTimeout(() => setShowSignup(false), 1000); // transition after message
    } catch (err) {
      setMessage("❌ Signup failed. Please try again.");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="p-5 border rounded shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">📝 Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
        <p className="mt-3 text-center">
          Already have an account? <button className="btn btn-link" onClick={() => setShowSignup(false)}>Login</button>
        </p>
        {message && (
          <div className={`mt-4 alert ${message.includes("successful") ? "alert-success" : "alert-danger"}`} role="alert">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
