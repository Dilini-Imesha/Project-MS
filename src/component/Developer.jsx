import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import bgImg from '../assest/S.jpg';

function Developer() {
  return (
    <card>
    <div className ="Deverloper" >
    <h2>Deverloper</h2>
    <Col xs={1} md={2} className="g-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="" src= "{bgImg}/100px160" />
            <Card.Body>
              <Card.Title>Project</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Col>
    </div>
    </card>
  );
}

export default Developer;