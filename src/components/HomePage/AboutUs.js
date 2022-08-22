import { Image, Container } from "react-bootstrap";
import Team from "../../images/Team.png";
import ThreedotsCollapse from "./buttons/ThreedotsCollapse";

function AboutUs() {
  return (
    <section id="aboutus">
      <div className="text-center">
        <h1 className="display-6 text-center ">AboutUs</h1>
        <Image 
        fluid
        src={Team}
        width={'91%'}
        rounded/>
        <Container>
            <br></br>
          <ThreedotsCollapse
            text={
              <div className = "lead text-black text-center">
                <p>
                  Robinson's Institute of Languages was founded in 2011 with the
                  intention of offering language courses for people seeking to
                  learn in a personalised way in the city of Buenos Aires.
                </p>
                <p>
                  We specialise in language courses for students who want to
                  take an exam, go on a trip, do business or just learn a
                  language in general.
                </p>
                <p>
                  All teachers at the institute are language experts and have
                  teaching certifications as well as teaching experience, and a
                  variety of us are native teachers.
                </p>
                <p>
                  The translations department opened in 2013 and consists of
                  both Argentine public translators and native English
                  translators to achieve better translations. We work as a team
                  to be able to translate long texts in less time without losing
                  the quality of the translation.
                </p>
              </div>
            }
          />
        </Container>
      </div>
    </section>
  );
}

export default AboutUs;
