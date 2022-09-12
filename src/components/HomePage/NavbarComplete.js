import {Container, Navbar,Nav, NavDropdown} from 'react-bootstrap';


function NavbarComplete () {
    
    return (
    <>
    <Navbar className=  "fixed-top bg-light" expand="lg" variant="light">
        <Container>
        <Navbar.Brand >
        <a href='#section-hero'>
        <img src= {require('../../images/Logo.png')}  alt="logo" width="50" height="" />
        </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto ">
         <Nav.Link href="#aboutus "className="lead text-black strong">About us</Nav.Link>
        <Nav.Link href="#classes "className="lead text-black strong">Classes</Nav.Link>
        <Nav.Link href="#translations "className="lead text-black strong">Translations</Nav.Link>
        <Nav.Link href="#groups "className="lead text-black strong">Groups</Nav.Link>
        <Nav.Link href="#prices "className="lead text-black strong">Prices</Nav.Link>
        <Nav.Link href="#reviews "className="lead text-black strong">Reviews</Nav.Link>
        <Nav.Link href="#contactus "className="lead text-black strong">Contact us</Nav.Link>
         
        </Nav>
        <NavDropdown title={<span className='lead text-primary strong'>Language</span>} id="collasible-nav-dropdown">
            <NavDropdown.Item className="lead text-black strong">English</NavDropdown.Item>
            <NavDropdown.Item className="lead text-black strong">Español</NavDropdown.Item>
        </NavDropdown>
 
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    )
}

export default NavbarComplete;