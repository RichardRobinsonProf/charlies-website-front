import { Image, Container,Row, Col } from "react-bootstrap";
import Translation from "../../images/Translation.png";
import ThreedotsCollapse from "./buttons/ThreedotsCollapse";
import Public from "../../images/Translating-public.png";
import Private from "../../images/Translating-private.png";
import Company from "../../images/Company.png";
import CardTypeClass from "./CardTypeClass";

function Translations() {
  return (
    <section id="translations">
      <div className="text-center">
        <h1 className="display-6 text-center ">Translations</h1>
       
      </div>
      <br></br>
      <Container>
      <Image src={Translation} rounded width={"100%"} />
        <p className="lead text-black text-center">
          <br></br>
          We offer professional translation and interpretation services. We have
          public translators from Argentina and native translators from the
          United Kingdom and the United States. We work together to achieve a
          better translation. We offer:
        </p>
        </Container>
        <Container>
        <Row className="text-center mx-auto">
          <Col className="md={4} xm={12}">
          <br></br>
          <CardTypeClass
            title={
              <div>
                <Image src={Public} width={100} />
                <p>Public Translations</p>
              </div>
            }
            body={
              <div>
                <ThreedotsCollapse 
                text={
                  <div>
                    <p className ="lead text-black strong">For documents such as:</p>
                    <p>- Birth, death, marriage and divorce certificates</p>
                    <p>- Passports and other personal documents</p>
                    <p>- Wills</p>
                    <p>- Study programs, analytical certificates, diplomas, CVs, and other documents related to education</p>
                    <p>- Contracts</p>
                    <p>- Corporate Documents (articles of incorporation, corporate bylaws, meeting and board minutes, commercial documents, and other corporate documents)</p>
                    <p>- Technical and scientific documents</p>
                    <p>- Invention patents, intellectual property, copyright</p>
                    <p>- Financial statements</p>
                    </div>     
                }
                />
              </div>
            }
          ></CardTypeClass>
          </Col>

          <Col className="md={4} xm={12}">
          <br></br>
          <CardTypeClass
            title={
              <div>
                <Image src={Private} width={100} />
                <p>Private Translations</p>
              </div>
            }
            body={
              <div>
                <ThreedotsCollapse 
                text={
                  <div>
                    <p className ="lead text-black strong">For documents in the areas of:</p>
                    <p>- Economy and Finance</p>
                    <p>- Commercial</p> 
                    <p>- Technology</p> 
                    <p>- Literature</p> 
                    <p>- Newspaper articles</p> 
                    <p>- Thesis</p>
                    <p>- Presentations</p>
                    </div>     
                }/>
              </div>
            }
          ></CardTypeClass>
          </Col>
          <Col className="md={4} xm={12}">
            <br></br>
          <CardTypeClass
            title={
              <div>
                <Image src={Company} width={100} height = {100} />
                <p>Interpretations</p>
              </div>
            }
            body={
              <div>
                <ThreedotsCollapse 
                 text={
                  <div>
                    <p className ="lead text-black strong">We provide language assistance:</p>
                    <p>- At congresses and conferences</p>
                    <p>- At business meetings</p> 
                    <p>- For foreign visitors</p> 
                    </div>     
                } />
              </div>
            }
          ></CardTypeClass>
          </Col>
      </Row>
      </Container>

    </section>
  );
}

export default Translations;
