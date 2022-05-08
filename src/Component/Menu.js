import React, { useState } from 'react'
import { Navbar, Container, Offcanvas, Nav, Form, FormControl, Button } from 'react-bootstrap'

import { styled } from '@mui/material/styles';
import { useHistory } from "react-router-dom"





function Menu() {

  
  
  




  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Container fluid>

          <Navbar.Brand href="#">Jarvic App</Navbar.Brand>



          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#">Dashbord</Nav.Link>
                <Nav.Link href="/table">User</Nav.Link>
                <Nav.Link href="/add">Add</Nav.Link>
                <Nav.Link href="/Logout">Logout</Nav.Link>

                

              </Nav>
             
              {/* <Form className="d-flex">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  label="Search"
                />

                <Button variant="outline-success">Search</Button>



              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar >
    </div >
  )
}

export default Menu