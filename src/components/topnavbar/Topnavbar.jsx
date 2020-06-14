import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Topnavbar = () => {
    return (
        <div className="Topnavbar">
            <Navbar expand="lg" bg="light">
                <div className="container justify-content-between">
                    <Navbar.Brand href="/#" className="p-1">Orgsentia</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/#">Home</Nav.Link>
                    </Nav>
                </div>
            </Navbar>
        </div>
    );
};

export default Topnavbar;