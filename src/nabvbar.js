import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
import {Link, NavLink} from "react-router-dom";
import { useState } from 'react';

function CollapsibleExample() {
  const[dropdown,setDropdown]=useState(false);
  
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="bg-gray-900 py-4 fixed top-0" variant="dark" style={{zIndex:999,fontSize:17}}>
      <Container>
        <Navbar.Brand as={Link} to={"/"} className="text-white" style={{fontWeight:'bold',fontSize:30}}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={NavLink} to={"/"} 
              style={({ isActive }) => ({
                color: isActive ? "skyblue" : "white"
                  })
                }
                  >Home</Nav.Link>

            <Nav.Link as={NavLink} to={"/about"} 
               style={({ isActive }) => ({
                 color: isActive ? "skyblue" : "white"
                })}
                className="home"
            >About</Nav.Link>
            <div className="hover-me">

            
            <NavDropdown title="Portfolio" id="collapsible-nav-dropdown" st>

            <NavDropdown title="Consultancy" id="collapsible-nav-dropdend1" drop={'end'} style={{alignItems:'center',justifyItems:'center'}} st>
              <NavDropdown.Item   as={NavLink} to={"/assetmanagement"} id="consultancy-1">Asset Management</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={"/projectmanagement"} id="consultancy-2">
                Project Management
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={"/energymanagement"} id="consultancy-3">Energy Management</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" id="consultancy-4">Value Engineering</NavDropdown.Item>
            </NavDropdown>
            

            <NavDropdown title="Manufacturing" id="collapsible-nav-dropdend2" drop={'end'} style={{alignItems:'center',justifyItems:'center'}} st>
              <NavDropdown.Item  href="#action/3.1" id="manufacturing-1">Special Purpose Machine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" id="manufacturing-2">
                Air Pollution Control Devices
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" id="manufacturing-3">Industrial Structure</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" id="manufacturing-4">General Fabrication</NavDropdown.Item>
            </NavDropdown>


            <NavDropdown.Item href="#action/3.3" id="sales-nav">Sales</NavDropdown.Item>


            <NavDropdown title="Services" id="collapsible-nav-dropdend3" drop={'end'} style={{alignItems:'center',justifyItems:'center'}} st>
              <NavDropdown.Item  href="#action/3.1" id="services-1">Energy Audit</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" id="services-2">
                Valuation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" id="services-3">
                Technical Advisory
              </NavDropdown.Item>
            </NavDropdown>


              {/* <NavDropdown.Item href="#action/3.2">
                Manufacturing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sales</NavDropdown.Item> */}
            </NavDropdown>
            </div>

            <Nav.Link as={NavLink} to={"/contact"} 
            style={({ isActive }) => ({
              color: isActive ? "skyblue" : "white"
                })}
            >Contact</Nav.Link>
            <Nav.Link as={NavLink} to={"/gallery"} 
            style={({ isActive }) => ({
              color: isActive ? "skyblue" : "white"
                })}>Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>  
    </Navbar>
    </div>
  );
}

export default CollapsibleExample;