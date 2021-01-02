import { useState, useEffect } from 'react';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { useLocation } from 'react-router-dom';

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let { pathname } = useLocation();
  const toggleNavbar = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand href="/">Todo App</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem active={pathname === '/'}>
              <NavLink href="/">Todos</NavLink>
            </NavItem>
            <NavItem active={pathname.includes('inprogress')}>
              <NavLink href="/inprogress">In Progress</NavLink>
            </NavItem>
            <NavItem active={pathname.includes('completed')}>
              <NavLink href="/completed">Completed</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;