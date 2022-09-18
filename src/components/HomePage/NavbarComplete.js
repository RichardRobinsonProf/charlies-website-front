import {Container, Navbar,Nav, NavDropdown} from 'react-bootstrap';
import {useContext, useState, useEffect} from 'react' 
import ContextChosenLanguage from '../../Context'
import {chosenLanguage} from '../../utils/language'


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
    <Navbar className= "fixed-top bg-light" expand="lg" variant="light">
        <Container>
        <Navbar.Brand >
        <a href='#section-hero'>
        <img src= {require('../../images/Logo.png')}  alt="logo" width="50" height="" />
        </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto ">
         <Nav.Link href="#aboutus "className="lead text-black strong">{text.navAboutus}</Nav.Link>
        <Nav.Link href="#classes "className="lead text-black strong">{text.navClasses}</Nav.Link>
        <Nav.Link href="#translations "className="lead text-black strong">{text.navTranslations}</Nav.Link>
        <Nav.Link href="#groups "className="lead text-black strong">{text.navGroups}</Nav.Link>
        <Nav.Link href="#prices "className="lead text-black strong">{text.navPrices}</Nav.Link>
        <Nav.Link href="#reviews "className="lead text-black strong">{text.navReviews}</Nav.Link>
        <Nav.Link href="#contactus "className="lead text-black strong">{text.navContact}</Nav.Link>
         
        </Nav>
        <NavDropdown title={<span className='lead text-primary strong'>{text.navLanguage}</span>} id="collasible-nav-dropdown">
            <NavDropdown.Item onClick={clickHandlerEnglish} className="lead text-black strong">English</NavDropdown.Item>
            <NavDropdown.Item onClick={clickHandlerSpanish} className="lead text-black strong">Español</NavDropdown.Item>
        </NavDropdown>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    )
}

export default NavbarComplete;