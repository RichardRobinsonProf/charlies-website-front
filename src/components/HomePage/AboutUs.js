import { Image, Container } from "react-bootstrap";
import Team from "../../images/Team.png";
import ThreedotsCollapse from "./buttons/ThreedotsCollapse";
import { useContext, useState, useEffect } from "react";
import ContextChosenLanguage from "../../Context";
import { chosenLanguage } from "../../utils/language";
import CardTypeClass from "./CardTypeClass";

function AboutUs() {
  const ctx = useContext(ContextChosenLanguage);
  const [text, setText] = useState(chosenLanguage(ctx.language));

  useEffect(() => {
    console.log(ctx.language);
    if (ctx.language === "English") {
      setText(chosenLanguage("English"));
    } else {
      setText(chosenLanguage("Spanish"));
    }
  }, [ctx.language]);
  return (
    <section id="aboutus">
      <br></br>
      <div className="text-center center-items">
        <h1 className="display-5 text-center text-white">
        
        </h1>
        <Container>
          <CardTypeClass
              title = {<h1 className="display-5 text-center">{text.aboutusTitle}</h1>}
              body= 
          
              {   <div> <p>{text.aboutusParagraphOne}</p> 
              <ThreedotsCollapse
                text={
                  <div className="lead text-black text-center">
                    
                    <p>{text.aboutusParagraphTwo}</p>
                    <p>{text.aboutusParagraphThree}</p>
                    <p>{text.aboutusParagraphFour}</p>
                  </div>
                 
                }
                
              /></div>}  
          />
        </Container>
      </div>
      <br></br>
    </section>
  );
}

export default AboutUs;
