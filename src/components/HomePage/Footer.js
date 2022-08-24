import {GrInstagram,GrFacebook } from 'react-icons/gr';
import {Row, Col} from 'react-bootstrap';



function Footer () {
    return (
        <div class="container py-sm-5 text-center">
            <p>© 2022 Robinson's Institute of Languages</p>
            <Row>
                <Col >
            <a href="https://www.instagram.com/robinsonsinstitute">
                <GrInstagram 
                color = "#2E31D2"
                size = "2em"
                /></a>
                <a>{"  "}</a>
                <a href="https://www.facebook.com/RobinsonsInstituteofLanguages">
                <GrFacebook 
                color = "#2E31D2"
                size = "2em"
                /></a>
                </Col> 
            </Row>
            
    </div>

    )
}

export default Footer;