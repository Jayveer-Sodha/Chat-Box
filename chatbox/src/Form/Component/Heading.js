import React from 'react'
import {Link} from 'react-router-dom'
import {  Navbar,Nav , NavItem, NavbarBrand,Container } from 'reactstrap'

const Heading = () => {
    return (
        <Navbar color="secondary" dark>
            <Container>
                <NavbarBrand href="/">Users</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link class="btn btn-primary"  to="/add">Add User</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
       
    )
}

export default Heading
