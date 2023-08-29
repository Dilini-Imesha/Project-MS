
import React, { useEffect, useState } from "react";

const Add = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("/api/request")
      .then((response) => response.json())
      .then((data) => setRequests(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h3>Requests List</h3>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            <p>Project: {request.project}</p>
            <p>Requirement ID: {request.requirementId}</p>
            <p>Type: {request.type}</p>
            <p>Priority: {request.priority}</p>
            <p>Description: {request.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Add;