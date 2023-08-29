import React, { useState } from "react";
import "./Forgot.css";



const Forgot = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a request to the server to initiate password reset
    fetch("/api/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="card">
      <div class="card-body">
        <h2>Enter Your Email</h2>
        <br />
        <div class Name="Forgot">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              style={{
                border: "1px solid #e9ecef",
                padding: ".9em 1em",
                outline: "none",
                margin: " 0 23px",
                width: "85%",
                height: "50%",
              }}
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />


            <button
              class="btn btn-primary"
              className="btn"
              button
              type="submit"
                style={{width: "50%",margin: " 10px 100px" }}
            >
              Submit
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
