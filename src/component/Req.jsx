
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Req.css";
import "./SideBar";
import Requirementlist from "./Requirementlist";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import Table from 'react-bootstrap/Table';

export default function Req() {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();
  const { reset } = useForm();

  // Function to fetch all requests from the backend
  const fetchAllRequests = async () => {
    try {
     const fetchAllRequests= ("http://localhost:5148/api/Request", {
    method: "get",
    body: JSON.stringify(Request),
    headers: { "Content-type": "application/json" },
  })
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };
  

  // Function to create a new request
  const createRequest = async () => {
    try {
      const newRequest = {
        // Define the properties of the new request here
        // For example:
        ProjectName: "Your Project Name",
        RequirementId: 123,
        Type: "Your Type",
        Priority: "Your Priority",
        Description: "Your Description",
      };

      const response =("http://localhost:5148/api/Request",newRequest,
      {
        method: "POST",
        body: JSON.stringify(Request),
        headers: { "Content-type": "application/json" },
      })
      
      .then((res) => {
        if (res.status === 200) {
          toast.success("Update success");
          navigate("/Requirment");

          reset({
            ProjectName: "Your Project Name",
            RequirementId: 123,
            Type: "Your Type",
            Priority: "Your Priority",
            Description: "Your Description",
          });
        }
      })
          console.log(response.data); // Optional: log the response data from the backend

      // After creating the request, refetch all requests to update the UI with the latest data
      fetchAllRequests();
    } catch (error) {
      console.error("Error creating request:", error);
    }
  };

  useEffect(() => {
    fetchAllRequests(); // Fetch all requests when the component mounts
  }, []);

  return (
    <div className="Reqcard">
      <div className="card-body">
        <div className="Requirment">
          <h2>Requirement</h2>
          <div className="reqeust">
            <a
            href="AddRequest"
            class="btn btn-primary btn-lg disabled"
            tabindex="-1"
            role="button"
            aria-disabled="true"
          >
            +Add Request
          </a>
          </div>
        </div>
       
        <div className="table">
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Project</th><br/>
          <th>RequirmentID</th><br/>
          <th>Type</th><br></br>
          <th>priority</th><br/>
          <th>description</th><br/>
          <th>Attachment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Project Managemnet System</td><br/>
          <td>PMS123</td><br/>
          <td>Features</td><br/>
          <td>High</td><br/>
          <td>I want to full database and Requirement,project,employee system</td>
        </tr>
        <tr>
        <td>Student Managemnet System</td><br/>
          <td>SMS675</td><br/>
          <td>Features</td><br/>
          <td>High</td><br/>
          <td>full database and Requirement,project,student manegement system</td>
        </tr>
        <tr>
        <td>Parking Managemnet System</td><br/>
          <td>PMS987</td><br/>
          <td>Features</td><br/>
          <td>low</td><br/>
          <td>full database and Requirement,project,vehicale packing system</td>
        </tr>
      </tbody>
    </Table>
        </div>

        <div>
          {/* Render your list of requests here using the 'requests' state */}
          {/* For example: */}
          {requests.map((request) => (
            <div key={request.id}>{request.ProjectName}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
