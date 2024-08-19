import React, { useEffect, useState } from 'react';
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { doLoggedOut, getCurrentUserDetail, isLoggedIn } from '../Auth';

function CustomNavbar(args) {

  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(
    () => {
      setLogin(isLoggedIn()),
      setUser(getCurrentUserDetail())
    },
    [login]
  )

  const logout = () => {
    doLoggedOut(
      ()=>{
        setLogin(false);
      }
    );
    navigate("/")

  }

  return (
    <div>
      <Navbar className='px-3' dark expand="md" style={{ backgroundColor: '#212529' }} {...args}>
        <NavbarBrand tag={ReactLink} to="/" style={{ color: 'white' }}>My Blogs</NavbarBrand>
        <NavbarToggler onClick={toggle} className="d-md-none" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/" style={{ color: 'white' }}>New Feed</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about" style={{ color: 'white' }}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/services" style={{ color: 'white' }}>Services</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{ color: 'white' }}>
                More
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Satellites</DropdownItem>
                <DropdownItem>Contact Us</DropdownItem>
                <DropdownItem>Facebook</DropdownItem>
                <DropdownItem>Instagram</DropdownItem>
                <DropdownItem>Youtube</DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={ReactLink} to='/services'>Services</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav navbar>
            
            {login && (
              <>
              <NavItem>
                  <NavLink tag={ReactLink} to="/user/profileinfo" style={{ color: 'white', cursor:'pointer' }}>Profile</NavLink>
                </NavItem>
              <NavItem>
                  <NavLink tag={ReactLink} to="/user/dashboard" style={{ color: 'white' ,cursor:'pointer' }}>{user.email}</NavLink>
                </NavItem>
              <NavItem>
                <NavLink onClick={logout} style={{ color: 'white', cursor:'pointer' }}>Logout</NavLink>
              </NavItem>
                </>
            )
            }

            
            {!login && (
            <><NavItem>
                <NavLink tag={ReactLink} to="/login" style={{ color: 'white' }}>Login</NavLink>
              </NavItem><NavItem>
                  <NavLink tag={ReactLink} to="/signup" style={{ color: 'white' }}>SignUp</NavLink>
                </NavItem></>
            )}
          </Nav>
          {/* <NavbarText style={{ color: 'white' }}>Satellite World</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
