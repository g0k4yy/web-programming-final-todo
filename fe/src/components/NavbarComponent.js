import React from 'react';
import { 
    Navbar, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink, 
    NavbarToggler, 
    Collapse 
} from 'reactstrap';
import { useAuth } from '../contexts/AuthContext';

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">My Todo App</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/todo/">Todos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/login/">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/register/">Register</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/add-todo/">Add-todo</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default NavbarComponent;