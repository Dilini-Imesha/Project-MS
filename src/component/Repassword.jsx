import React, { useState } from "react";
import "./Repassword.css";

const Repassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a request to the server to update the password
    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, confirmPassword }),
      });

      const data = await response.json();

      // Display appropriate message to the user
      setMessage(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    // <div class="card">
      <div class="card-bodys">
        <div>
          <h2>Password Reset</h2>
          <br/>
          <form onSubmit={handleSubmit}>
            <label Name="Password">
              New Password :
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <br/>
            <label Name="Password">
              Confirm Password :
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
            <br />
            <br />
            <button
              className="btn"
              button
              type="submit"
              style={{ margin: "auto", width: "50%" }}
            >
              Submit
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    // </div>
  );
};

export default Repassword;
