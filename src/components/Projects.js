import React from 'react'
import { Card,CardGroup } from 'react-bootstrap';

export default function Projects() {
    // vanilla js


  return (
    //   JSX section
    <div style={{ marginTop: "100px" }}>
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Wild Silk Soap Co.</Card.Title>
            <Card.Text>
             Commercial app with payment integration
             Admin login 
            SQL database?
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Bug Tracker</Card.Title>
            <Card.Text>
              User authentication,
              User administrator login
              reactJS, MongoDB, bootstrap!

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Payroll Portal</Card.Title>
            <Card.Text>
            Creates users and generates printable reports
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}
