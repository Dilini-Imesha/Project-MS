import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import "./Add.css";

function GridComplexExample() {
  return (
    <card>
    <Form>

        <h3>Add Request</h3>
      <Row className="mb-3">

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Project</Form.Label>
        <Form.Control placeholder="Hospital Manegemnet Software" />
      </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Requirment ID</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Types</Form.Label>
         
          <Form.Select defaultValue="Choose...">
            <option>Improvement</option>
            <option>Changing Request</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Priority</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Description</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>

     
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Attachment</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Report By</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>



      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Cencel
      </Button>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
    </card>
  );
}

export default GridComplexExample;