import CardTypeClass from "./CardTypeClass";
import { Container, Row, Col, Image } from "react-bootstrap";
import ThreedotsCollapse from "./buttons/ThreedotsCollapse";
import Virtual from "../../images/Virtual.png";
import { useContext, useState, useEffect } from "react";
import ContextChosenLanguage from "../../Context";
import { chosenLanguage } from "../../utils/language";

function ContainerCards() {
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
  return (
    <section id="classes">
      <Container className="text-center">
        <h1 className="display-6 text-center ">{text.classesTitle}</h1>
        <Row className="text-center mx-auto">
          <Col md={12} xm={12}>
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
                  <p>{text.classesVirtual}</p>
                </div>
              }
              body={text.classesVirtualParagraph}
            />
          </Col>
        </Row>
        <br></br>

        <ThreedotsCollapse
          text={
            <div className="lead text-black text-center">
              <p>
                {text.classesParagraphOne}
              </p>
              <p>
               {text.classesParagraphTwo}
              </p>
              <p>
               {text.classesParagraphThree}
              </p>
            </div>
          }
        />
      </Container>
    </section>
  );
}

export default ContainerCards;
