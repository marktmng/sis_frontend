import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Topbar(props) {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">[SIS]</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/program">Program</Nav.Link>
            {/* Dropdown */}
            <NavDropdown title="Sections" id="basic-nav-dropdown">
              <NavDropdown.Item href="/lecturer">Lecturer</NavDropdown.Item>
              <NavDropdown.Item href="/students">Students</NavDropdown.Item>
              <NavDropdown.Item href="/parents">Parent</NavDropdown.Item>
              <NavDropdown.Divider /> {/* Divider */}
              <NavDropdown.Item href="/studentmark">
                Student Mark
              </NavDropdown.Item>
              <NavDropdown.Item href="/tutionfee">Tution Fee</NavDropdown.Item>
            </NavDropdown>
            {/* Dropdown */}
            <NavDropdown title="Portal" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/registration">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;
