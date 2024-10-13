import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
import {Link, NavLink} from "react-router-dom";

function CollapsibleExample() {
  
  
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-gray-900 py-3" style={{position:"sticky", top:0, zIndex:999}}>
      <Container>
        <Navbar.Brand as={Link} to={"/"} className="text-white" style={{fontWeight:'bold'}}>React-Bootstrap</Navbar.Brand>
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

            <NavDropdown title="Consultancy" id="collapsible-nav-dropdend" drop={'end'} style={{alignItems:'center',justifyItems:'center'}} st>
              <NavDropdown.Item  href="#action/3.1">Asset Manager</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Project Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Energy Management</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Value Engineering</NavDropdown.Item>
            </NavDropdown>
            

            <NavDropdown title="Manufacturing" id="collapsible-nav-dropdend" drop={'end'} style={{alignItems:'center',justifyItems:'center'}} st>
              <NavDropdown.Item  href="#action/3.1">Asset Manager</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Project Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Energy Management</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Value Engineering</NavDropdown.Item>
            </NavDropdown>


            <NavDropdown.Item href="#action/3.3" id="sales-nav">Sales</NavDropdown.Item>


            <NavDropdown title="Services" id="collapsible-nav-dropdend" drop={'end'} style={{alignItems:'center',justifyItems:'center'}} st>
              <NavDropdown.Item  href="#action/3.1">Energy Audit</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Valuation
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
  );
}

export default CollapsibleExample;