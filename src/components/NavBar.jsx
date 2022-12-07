import React from "react";
import { Container } from "react-bootstrap/";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const NavBar = ({ search, setSearch }) => {
  return (
    <Navbar expand="sm">
      <Container expand="lg container-fluid">
        <Navbar.Brand href="#home">TOP 100 Songs</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav justify-content-end" />
        <Navbar.Collapse
          id="basic-navbar-nav navbar"
          className="justify-content-end"
        >
          <Nav>
            <input
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
