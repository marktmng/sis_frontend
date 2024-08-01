import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const styles = {
  navbar: {
    backgroundColor: '#85C1E9',
  },
  navBrand: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    color: '#85C1E9 ',
  },
  navBrandHover: {
    color: '#ffcc00',
  },
  navLink: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    color: '#85C1E9 ',
  },
  navLinkHover: {
    color: '#ffcc00',
  },
  navDropdownItem: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    color: '#85C1E9 ',
  },
  navDropdownItemHover: {
    color: '#ffcc00',
  }
};

function Topbar(props) {
  return (
    <>
      <Navbar style={styles.navbar} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" style={styles.navBrand} onMouseEnter={e => e.target.style.color = styles.navBrandHover.color} onMouseLeave={e => e.target.style.color = styles.navBrand.color}>[SIS]</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" style={styles.navLink} onMouseEnter={e => e.target.style.color = styles.navLinkHover.color} onMouseLeave={e => e.target.style.color = styles.navLink.color}>Home</Nav.Link>
            <Nav.Link href="/program" style={styles.navLink} onMouseEnter={e => e.target.style.color = styles.navLinkHover.color} onMouseLeave={e => e.target.style.color = styles.navLink.color}>Program</Nav.Link>
            {/* Dropdown */}
            <NavDropdown title="Sections" id="basic-nav-dropdown" style={styles.navBrand} onMouseEnter={e => e.target.style.color = styles.navBrandHover.color} onMouseLeave={e => e.target.style.color = styles.navBrand.color}>
              <NavDropdown.Item href="/lecturer" style={styles.navDropdownItem} onMouseEnter={e => e.target.style.color = styles.navDropdownItemHover.color} onMouseLeave={e => e.target.style.color = styles.navDropdownItem.color}>Lecturer</NavDropdown.Item>
              <NavDropdown.Item href="/students" style={styles.navDropdownItem} onMouseEnter={e => e.target.style.color = styles.navDropdownItemHover.color} onMouseLeave={e => e.target.style.color = styles.navDropdownItem.color}>Students</NavDropdown.Item>
              <NavDropdown.Item href="/parents" style={styles.navDropdownItem} onMouseEnter={e => e.target.style.color = styles.navDropdownItemHover.color} onMouseLeave={e => e.target.style.color = styles.navDropdownItem.color}>Parent</NavDropdown.Item>
              <NavDropdown.Divider /> {/* Divider */}
              <NavDropdown.Item href="/studentmark" style={styles.navDropdownItem} onMouseEnter={e => e.target.style.color = styles.navDropdownItemHover.color} onMouseLeave={e => e.target.style.color = styles.navDropdownItem.color}>
                Student Mark
              </NavDropdown.Item>
              <NavDropdown.Item href="/tutionfee" style={styles.navDropdownItem} onMouseEnter={e => e.target.style.color = styles.navDropdownItemHover.color} onMouseLeave={e => e.target.style.color = styles.navDropdownItem.color}>Tution Fee</NavDropdown.Item>
            </NavDropdown>
            {/* Dropdown */}
            <NavDropdown title="Portal" id="basic-nav-dropdown" style={styles.navBrand} onMouseEnter={e => e.target.style.color = styles.navBrandHover.color} onMouseLeave={e => e.target.style.color = styles.navBrand.color}>
              <NavDropdown.Item href="/login" style={styles.navDropdownItem} onMouseEnter={e => e.target.style.color = styles.navDropdownItemHover.color} onMouseLeave={e => e.target.style.color = styles.navDropdownItem.color}>Login</NavDropdown.Item>
              <NavDropdown.Item href="/registration" style={styles.navDropdownItem} onMouseEnter={e => e.target.style.color = styles.navDropdownItemHover.color} onMouseLeave={e => e.target.style.color = styles.navDropdownItem.color}>Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;
