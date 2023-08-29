import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./Add.css";

const Add = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          project: e.target.formGroupExampleInput.value,
          requirementId: e.target.formGroupExampleInput2.value,
          type: e.target.formGroupExampleInputType.value,
          priority: e.target.formGroupExampleInputPriority.value,
          description: e.target.exampleFormControlTextarea1.value,
        }),
      });

      const data = await response.json();

      setMessage(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="Request">
      <div className="card-body">
        <Form onSubmit={handleSubmit}>
          <h3>Add Request</h3>
          <Row className="mb-3">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Project
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Hospital Management Software"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Requirement ID
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter ID"
              />
            </div>
            <div className="row">
              <div className="col">
                <label
                  htmlFor="formGroupExampleInputType"
                  className="form-label"
                >
                  Type
                </label>
                <br />
                <select
                  className="form-select"
                  id="formGroupExampleInputType"
                  aria-label="Default select example"
                >
                  <option value="Features">Features</option>
                  <option value="Improvement">Improvement</option>
                  <option value="Changing Request">Changing Request</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label
                  htmlFor="formGroupExampleInputPriority"
                  className="form-label"
                >
                  Priority
                </label>
                <br />
                <select
                  className="form-select"
                  id="formGroupExampleInputPriority"
                  aria-label="Default select example"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
          </Row>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <br />
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Attachment
            </label>
            <br />
            <input className="form-control" type="file" id="formFile" />
          </div>
          <br/>
          <div className="Cancelbutton">
          <a
            href="Requirment"
            class="btn btn-primary btn-lg disabled"
            tabindex="-1"
            role="button"
            aria-disabled="true"
          >
            Cancel
          </a>
          </div>
          <br/>
          <div className="Create">
          <Button variant="primary" type="submit">
            Create
          </Button>
          </div>
        </Form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Add;

