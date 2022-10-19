import { Image, Container,Row, Col } from "react-bootstrap";
import Translation from "../../images/Translation.png";
import ThreedotsCollapse from "./buttons/ThreedotsCollapse";
import Public from "../../images/Translating-public.png";
import Private from "../../images/Translating-private.png";
import Company from "../../images/Company.png";
import CardTypeClass from "./CardTypeClass";
import { useContext, useEffect, useState } from "react";
import ContextChosenLanguage from '../../Context'
import {chosenLanguage} from '../../utils/language'


function Translations() {
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
    <section id="translations">
      <br></br>
      <div className="text-center">
        <h1 className="display-5 text-center ">{text.translationsTitle}</h1>
      </div>
      <Container>
      <Image src={Translation} rounded width={"100%"} />
        <p className="lead text-black text-center">
          <br></br>
          <CardTypeClass
            body= {<div className="strong lead">{text.translationsParagraphOne}</div>}
          />
       
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
                <p>{ text.translationsPublic}</p>
              </div>
            }
            body={
              <div>
                <ThreedotsCollapse 
                text={
                  <div>
                    <p className ="lead text-black strong">{text.translationsPublicBold}</p>
                    <p>{text.translationsPublicListOne}</p>
                    <p>{text.translationsPublicListTwo}</p>
                    <p>{text.translationsPublicListThree}</p>
                    <p>{text.translationsPublicListFour}</p>
                    <p>{text.translationsPublicListFive}</p>
                    <p>{text.translationsPublicListSix}</p>
                    <p>{text.translationsPublicListSeven}</p>
                    <p>{text.translationsPublicListEight}</p>
                    <p>{text.translationsPublicListNine}</p>
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
                <p>{text.translationsPrivate}</p>
              </div>
            }
            body={
              <div>
                <ThreedotsCollapse 
                text={
                  <div>
                    <p className ="lead text-black strong">{text.translationsPrivateBold}</p>
                    <p>{text.translationsPrivateListOne}</p>
                    <p>{text.translationsPrivateListTwo}</p> 
                    <p>{text.translationsPrivateListThree}</p> 
                    <p>{text.translationsPrivateListFour}</p> 
                    <p>{text.translationsPrivateListFive}</p> 
                    <p>{text.translationsPrivateListSix}</p>
                    <p>{text.translationsPrivateListSeven}</p>
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
                <p>{text.translationsInterpretation}</p>
              </div>
            }
            body={
              <div>
                <ThreedotsCollapse 
                 text={
                  <div>
                    <p className ="lead text-black strong">{text.translationsInterpretationBold}</p>
                    <p>{text.translationsInterpretationListOne}</p>
                    <p>{text.translationsInterpretationListTwo}</p> 
                    <p>{text.translationsInterpretationListThree}</p> 
                    </div>     
                } />
              </div>
            }
          ></CardTypeClass>
          </Col>
      </Row>
      <br></br>
      </Container>

    </section>
  );
}

export default TranslationsCopy;
