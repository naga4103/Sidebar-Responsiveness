import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {         GiHamburgerMenu 
} from "react-icons/gi";

import {AiOutlineClose} from "react-icons/ai";

import './Navbar.css'

function SecondEx() {

    const [isClicked,setIsClicked]=useState(false)
    const [open, setOpen] = useState(false);


  return (
    <>

    <div className='sidebar'>
        <div className='main-container-col'>
            <h1 className='header-container'>Header</h1>
            <div className='sidebar-main-container'>
                <div className='side-menu'>
                    <ul>
                        <li>One</li>
                        <li>Two</li>
                        <li>Three</li>
                    </ul>


                </div>

                <div className='side-body'>

<p>The Taj Mahal is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself</p>
                </div>

            </div>
<footer className='footer'>
Footer
</footer>
        </div>

    </div>
    <div className='nav-canvas'>
   
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
       
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
      
    </>
  );
}

export default SecondEx;