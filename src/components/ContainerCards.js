import CardTypeClass from "./CardTypeClass";
import { Container,Row,Col,Image } from "react-bootstrap";
import Presencial from "../images/Presencial.png";
import Virtual from "../images/Virtual.png";



function ContainerCards() {
  return (
    <section id="classes">
    <Container className="text-center">
      <h1 className="display-6 text-center ">Classes</h1>
        <Row className="text-center mx-auto">
            <Col md ={6} xm = {12}>
                 <Image className="img-fluid" src={Presencial}  height="200" width="100"></Image>
                <CardTypeClass 
                image= {Presencial}
                title="Classes at home/work"
                body= "You can take language classes in your own home or office. Our buffer zone includes: Microcentro, Puerto Madero, San Telmo, Recoleta, Palermo and Belgrano"
                />
            </Col>
            <Col md ={6} xm = {12}>
            <Image className="img-fluid" src={Virtual} height="200" width="100"></Image>
                <CardTypeClass
                image= {Virtual}
                title="Virtual classes"
                body= "We also offer you the possibility of taking virtual classes via Skype, Zoom or other similar platform. Currently all classes are being given virtually."
                />
            </Col>
        </Row>
        

    </Container>
    </section>
  );
}

export default ContainerCards;

