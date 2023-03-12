import {Container, Navbar,Nav, NavDropdown} from 'react-bootstrap';
import {useContext, useState, useEffect} from 'react' 
import ContextChosenLanguage from '../../Context'
import {chosenLanguage} from '../../utils/language'
import {HashLink as Link} from 'react-router-hash-link';

function NavbarComplete () {
    const ctx = useContext(ContextChosenLanguage)
    const [text, setText] = useState(chosenLanguage(ctx.language))
    
    useEffect (() => {
    
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
        <Link to="/#section-hero" className="text-white text-decoration-none">
        <img src= {require('../../images/RIL Logo.jpeg')}  className="rounded-circle"  alt="logo" width="50" height="" />
        </Link> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto ">
            <Link to ="/#aboutushero" className="lead text-white ms-md-1 mb-2 mb-md-0 text-decoration-none hover2 p-2 text-center">{text.navAboutus}</Link>
            <Link to="/#classes"className="lead text-white ms-md-1 mb-2 mb-md-0 text-decoration-none hover2 p-2 text-center">{text.navClasses}</Link>
            <Link to="/translations"className="lead text-white ms-md-1 mb-2 mb-md-0 text-decoration-none hover2 p-2 text-center">{text.navTranslations}</Link>
            <Link to="/prices"className="lead text-white ms-md-1 mb-2 mb-md-0 text-decoration-none hover2 p-2 text-center">{text.navPrices}</Link>
            <Link to="/#reviews"className="lead text-white ms-md-1 mb-2 mb-md-0 text-decoration-none hover2 p-2 text-center">{text.navReviews}</Link>
            <Link to="/#contactus"className="lead text-white ms-md-1 mb-2 mb-md-0 text-decoration-none hover2 p-2 text-center">{text.navContact}</Link>
        </Nav>
        {!ctx.onPage ? 
        <NavDropdown className="text-white p-2 text-center hover2" title={<span className='lead p-2 text-center '>{text.navLanguage}</span>} id="nav-dropdown">
        <NavDropdown.Item onClick={clickHandlerEnglish} className="lead text-white width-100">English</NavDropdown.Item>
        <NavDropdown.Item onClick={clickHandlerSpanish} className="lead text-white">Español</NavDropdown.Item>
    </NavDropdown> : null
    }
        
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    )
}

export default NavbarComplete;