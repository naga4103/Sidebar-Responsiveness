import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {         GiHamburgerMenu 
} from "react-icons/gi";

import {AiOutlineClose} from "react-icons/ai"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Example() {
  const [open, setOpen] = useState(false);
  //const [isClick, setIsClicked]=useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        

        style={{border:"0px", width:"100px", height:"50px",backgroundColor:"white"}}
      >
        {/* Click */}
        {/* <i class="fa-solid fa-xmark"></i> */}
        {open?<AiOutlineClose/>:       < GiHamburgerMenu/>
}
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <Nav className="me-auto flex-column">
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
        </div>
      </Collapse>
    </>
  );
}

export default Example