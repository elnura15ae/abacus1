import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default function navBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <Navbar.Brand href="/">Camel Club</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Online Practice</Nav.Link>
          <NavDropdown title="Mental Math Course" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/module1">Module 1</NavDropdown.Item>
            <NavDropdown.Item href="/module2">Module 2</NavDropdown.Item>
            <NavDropdown.Item href="/module3">Module 3</NavDropdown.Item>
            <NavDropdown.Item href="/abacus">Abacus/Soroban</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/partners">Schools/Partners</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link eventKey={2} href="/register">
            Register
      </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
