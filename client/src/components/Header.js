import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    // Bootstrap navbar
    <Navbar style={{backgroundColor: "black"}}>
      <Container className="my-3">
        
        {/* Brand Name which routes to home page */}
        <Link to="/">
          <Navbar.Brand style={{fontSize: "25px", color: "white"}}>Social</Navbar.Brand>
        </Link>

      </Container>
    </Navbar>
  )
}

