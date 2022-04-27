import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {changeColor} from "../store/colorStore"

// CSS inside javascript 

export default function NavBar() {
  const dispatch = useDispatch();
  const color = useSelector((state)=> state.colorStore.color)
  console.log(color)
  return (
    <Navbar bg={color} variant="dark" expand="lg" onClick={()=> dispatch(changeColor())}>
      <Container>
        <Navbar.Brand href="#home">Max Morrow</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#aboutme">About Me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

