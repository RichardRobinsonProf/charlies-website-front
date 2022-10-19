import {Container, Navbar,Nav, NavDropdown} from 'react-bootstrap';
import {useContext, useState, useEffect} from 'react' 
import ContextChosenLanguage from '../../Context'
import {chosenLanguage} from '../../utils/language'
import styles from './NavbarComplete.module.css'


function NavbarComplete () {
    const ctx = useContext(ContextChosenLanguage)
    const [text, setText] = useState(chosenLanguage(ctx.language))
    
    useEffect (() => {
        console.log(ctx.language)
        if (ctx.language === 'English') {
            setText(chosenLanguage('English'))
        } else {
            setText(chosenLanguage('Spanish'))
        }
    },[ctx.language])
 

    function clickHandlerEnglish () {
        ctx.setLanguage('English')
    }
    function clickHandlerSpanish () {
        ctx.setLanguage('Spanish')
    }

    return (
    <>
    <Navbar className= "fixed-top bg-blue" expand="lg" variant="light">
        <Container>
        <Navbar.Brand >
        <a href='#section-hero'>
           
        <img src= {require('../../images/RIL Logo.jpeg')}  className="rounded-circle"  alt="logo" width="50" height="" />
        </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto ">
            <Nav.Link href="#aboutus "className="lead text-white">{text.navAboutus}</Nav.Link>
            <Nav.Link href="#classes "className="lead text-white">{text.navClasses}</Nav.Link>
            <Nav.Link href="#translations "className="lead text-white">{text.navTranslations}</Nav.Link>
            <Nav.Link href="#prices "className="lead text-white">{text.navPrices}</Nav.Link>
            <Nav.Link href="#reviews "className="lead text-white">{text.navReviews}</Nav.Link>
            <Nav.Link href="#contactus "className="lead text-white">{text.navContact}</Nav.Link>
        </Nav>
        <NavDropdown className="nav-dropdown-styled" title={<span className='lead text-white'>{text.navLanguage}</span>} id="collasible-nav-dropdown">
            <NavDropdown.Item onClick={clickHandlerEnglish} className="lead">English</NavDropdown.Item>
            <NavDropdown.Item onClick={clickHandlerSpanish} className="lead">Español</NavDropdown.Item>
        </NavDropdown>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    )
}

export default NavbarComplete;