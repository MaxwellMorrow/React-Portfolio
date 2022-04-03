import React from 'react'

// CSS inside javascript 
import styled from 'styled-components'

function Header() {
  return (
    <Navbar>
      <Navitem>Home</Navitem>
      <Navitem>About</Navitem>
      <Navitem>Projects</Navitem>
      <Navitem>Contact Me</Navitem>
    </Navbar>
  );
}


const Navbar = styled.div`
background-color:red;
color:white;
position:sticky;
display:flex;
justify-content:flex-end;`;

const Navitem = styled.div`
padding-left:10px;
padding-right:10px;
&:hover{
  color:black
};
`;
export default Header