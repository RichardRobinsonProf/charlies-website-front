import CardTypeClass from "./CardTypeClass";
import { Container, Row, Col, Image } from "react-bootstrap";
import ThreedotsCollapse from "./buttons/ThreedotsCollapse";
import Presencial from "../../images/Presencial.png";
import Virtual from "../../images/Virtual.png";

function ContainerCards() {
  return (
    <section id="classes">
      <Container className="text-center">
        <h1 className="display-6 text-center ">Classes</h1>
        <Row className="text-center mx-auto">
          <Col md={6} xm={12}>
            <br></br>
            <CardTypeClass
              title={
                <div>
                  <Image
                    className="img-fluid"
                    src={Presencial}
                    height="200"
                    width="100"
                  />
                  <p>Classes at home/work</p>
                </div>
              }
              body="You can take language classes in your own home or office. Our buffer zone includes: Microcentro, Puerto Madero, San Telmo, Recoleta, Palermo and Belgrano"
            />
          </Col>
          <Col md={6} xm={12}>
            <br></br>
            <CardTypeClass
              image={Virtual}
              title={
                <div>
                  <Image
                    className="img-fluid"
                    src={Virtual}
                    height="200"
                    width="100"
                  />
                  <p>Virtual classes</p>
                </div>
              }
              body="We also offer you the possibility of taking virtual classes via Skype, Zoom or other similar platform. Currently all classes are being given virtually."
            />
          </Col>
        </Row>
        <br></br>

        <ThreedotsCollapse
          text={
            <div className="lead text-black text-center">
              <p>
                At Robinson's Institute of Languages we understand the
                importance of conversation when learning a new language. That is
                why our way of teaching is based on conversation. All of our
                teachers have international certifications and teaching
                experience, the majority are native but we also have some local
                teachers who have lived abroad for a period of time and can
                explain certain rules in Spanish should the student require it.
                We are all experts in assessing the level and needs of each
                student to plan a personalised course.
              </p>
              <p>
                We seek to create dynamic and interactive classes. We use
                different tools, such as the internet, to make classes more fun
                and dynamic. We have material to help study grammar, listening
                and reading activities and material for exam preparation.
              </p>
              <p>
                We offer flexibility regarding the time and place where classes
                can be taken. You can choose to have individual or group
                classes.
              </p>
            </div>
          }
        />
      </Container>
    </section>
  );
}

export default ContainerCards;
