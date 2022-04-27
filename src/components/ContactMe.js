import React from "react";
import { Form, Button } from "react-bootstrap";

export default function ContactMe() {
  return (
    <div style={{marginTop: "100px"}}>
      <h2 style={{ textAlign: "center" }}>Contact Me</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="name" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSubject">
          <Form.Control type="subject" placeholder="Enter Subject" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Control type="message" placeholder="Enter Message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
