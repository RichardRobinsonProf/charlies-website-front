import {GrInstagram,GrFacebook } from 'react-icons/gr';
import {Row, Col} from 'react-bootstrap';



function Footer () {
    return (
        <section id="footer" >
        <div className="container py-sm-5 text-center">
            <p>© 2022 Robinson's Institute of Languages</p>
            <Row>
                <Col >
            <a href="https://www.instagram.com/robinsonsinstitute">
                <GrInstagram 
                color = "#2E31D2"
                size = "2em"
                /></a>
                <span> - </span>
                <a href="https://www.facebook.com/RobinsonsInstituteofLanguages">
                <GrFacebook 
                color = "#2E31D2"
                size = "2em"
                /></a>
                </Col> 
            </Row>
            
    </div>
    </section>

    )
}

export default Footer;