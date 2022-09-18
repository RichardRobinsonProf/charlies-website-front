import { Container, Image} from "react-bootstrap";
import CardTypeClass from "./CardTypeClass";
import Man from "../../images/male-user.png"
import Woman from "../../images/woman-avatar.png"
import ThreedotsCollapse from "./buttons/ThreedotsCollapse";
import { useContext, useEffect, useState } from "react";
import ContextChosenLanguage from '../../Context'
import {chosenLanguage} from '../../utils/language'
import Companies from "../../images/Companies.png";


function Reviews() {
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
    <section id="reviews">
      <br></br>
      <Container className="text-center">
        <h1 className="display-5 text-center ">{text.reviewsTitle}</h1>
        <div className="row text-center mx-auto">
        <div className="col-12 col-md-6 col-xl-6 ">
      
        <CardTypeClass
        title={
          <div>
            <Image src={Woman} width={50} />
            <p>Andrea - Profesora de inglés y traductora</p>
          </div>
        }
        body = {
          <div>
          <ThreedotsCollapse
          text= {
            <figure>
							<blockquote className="blockquote">
								<p className= "lead"><i className="lead" aria-hidden="true"></i>"El Instituto Robinson ofrece cursos adaptables para estudiantes de todos los niveles, ajustándose a las necesidades particulares de cada uno, ya sea que se necesite por razones laborales, académicas, etc. . Además, es muy recomendable para estudiantes avanzados de Inglés, profesores, traductores, intérpretes etc., ya que el estudiar con profesores nativos permite lograr una práctica periódica de conversación, escucha e interacción en Inglés REAL con alto grado de exigencia. En mi caso, por ejemplo, me ayudó a evitar pensar en Español, vicio generalmente arraigado en los hispanoparlantes." <i className="fas fa-fw fa-quote-right text-secondary" aria-hidden="true"></i></p>
							</blockquote>
							<figcaption className="blockquote-footer">Andrea - Profesora de inglés y traductora <time dateTime="2020-09-01T12:00">(September 08 2021 )</time></figcaption>
						</figure>
          }/>
          </div>
          }
        />
						
					</div>
					<div className="col-12 col-md-6 col-xl-6 ">
           
          <CardTypeClass
          title={
            <div>
              <Image src={Man} width={50} />
              <p>Cristian - Financiero </p>
            </div>
          }
           body = {
            <div>
            <ThreedotsCollapse
            text= {
              <div>
                <figure>
							<blockquote className="blockquote">
								<p className="lead"><i className="fas fa-fw text-secondary" aria-hidden="true"></i> "Robinson’s Institute ofrece grandes posibilidades para aquellas personas que tienen el interés o la necesidad de aprender inglés. En mi caso personal siempre fue una materia pendiente y con el escaso tiempo con el que cuento, no fue posible. El Instituto me ofreció la posibilidad de incorporar las clases de manera flexible, adecuándolas al ritmo de mi trabajo y tiempo libre. Es así como algunos días un profesor se acerca a mi oficina de trabajo, otros tomo las clases en algún bar o en el Instituto mismo. De esta forma siempre mantengo la constancia, indispensable para avanzar en el aprendizaje." <i className="fas fa-fw fa-quote-right text-secondary" aria-hidden="true"></i></p>
							</blockquote>
							<figcaption className="blockquote-footer">Cristian - Financiero <time dateTime="2020-09-01T12:00">(January 15 2022)</time></figcaption>
						</figure>
              </div>
            }/>
            </div>
            }
          />	
					</div>
          </div>
          <br></br>
          <p className="lead text-black strong">{text.companiesThatTrustUs} </p>
          <Image src={Companies} fluid width={1200}/>
          <br></br>
        </Container>
        <br></br>

     
     
    </section>
  );
}

export default Reviews;
