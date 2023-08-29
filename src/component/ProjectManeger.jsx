import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import bgImg from '../assest/A.jpeg';

function ProjectManeger() {
  return (
    <card>
    <div className ="ProjectManeger" >
    <h2>Project Maneger</h2>
    <Col xs={1} md={2} className="g-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            {/* <Card.Img variant="" src= "{bgImg}/100px160" /> */}
            <Card.Body>
              <h3>project</h3>
             
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Col>
    </div>
    </card>
  );
}

export default ProjectManeger;

