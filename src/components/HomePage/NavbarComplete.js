import {Container, Navbar,Nav, NavDropdown} from 'react-bootstrap';
import {HashLink as Link} from 'react-router-hash-link';
import { useContext, useState } from 'react';
import Context from '../../Context';
import useTranslation from '../../hooks/useTranslation';

function NavbarComplete () {
    const [isOpen, setIsOpen] = useState(false) 
    const {text} = useTranslation()
    const ctx = useContext(Context)

    
    function clickHandlerEnglish () {
        ctx.setLanguage('English')
        setIsOpen(false)
    }
    function clickHandlerSpanish () {
        ctx.setLanguage('Spanish')
        setIsOpen(false)    
    }

    return (
    <>
    
    <Navbar className= "fixed-top bg-blue" expand="lg" variant="light">
        <Container>
        <Navbar.Brand >
        <Link to="/#section-hero" className="text-white text-decoration-none">
        <img src= {require('../../images/RIL Logo.jpeg')}  className="rounded-circle"  alt="logo" width="50" height="" />
        </Link> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setIsOpen(!isOpen)} />
        <Navbar.Collapse in={isOpen} id="navbarScroll">
        <Nav className="me-auto">
            <Link onClick={() => {setIsOpen(false)}} to ="/#aboutushero" className="lead text-white ms-md-1 mb-2 mb-md-0 text-decoration-none hover2 p-2 text-center">{text.navAboutus}</Link>
            <Link  onClick={() => {setIsOpen(false)}}  to="/#classes"className="lead text-white ms-md-1 mb-2 mb-md-0 text-decoration-none hover2 p-2 text-center">{text.navClasses}</Link>
            <Link to="/translations"className="lead text-white ms-md-1 mb-2 mb-md-0 text-decoration-none hover2 p-2 text-center">{text.navTranslations}</Link>
            <Link to="/prices"className="lead text-white ms-md-1 mb-2 mb-md-0 text-decoration-none hover2 p-2 text-center">{text.navPrices}</Link>
            <Link  onClick={() => {setIsOpen(false)}}  to="/#reviews"className="lead text-white ms-md-1 mb-2 mb-md-0 text-decoration-none hover2 p-2 text-center">{text.navReviews}</Link>
            <Link  onClick={() => {setIsOpen(false)}}  to="/#contactus"className="lead text-white ms-md-1 mb-2 mb-md-0 text-decoration-none hover2 p-2 text-center">{text.navContact}</Link>
        </Nav>
        {!ctx.onPage ? 
        <NavDropdown   op className="text-white p-2 text-center hover2" title={<span className='lead p-2 text-center '>{text.navLanguage}</span>} id="nav-dropdown">
        <NavDropdown.Item onClick={clickHandlerEnglish} className="lead text-white width-100">English</NavDropdown.Item>
        <NavDropdown.Item  onClick={clickHandlerSpanish} className="lead text-white">Español</NavDropdown.Item>
    </NavDropdown> : null
    }
        
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    )
}

export default NavbarComplete;