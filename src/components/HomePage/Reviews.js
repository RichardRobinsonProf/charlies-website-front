import { Container, Image} from "react-bootstrap";
import CardTypeClass from "./CardTypeClass";
import Man from "../../images/male-user.png"
import Woman from "../../images/woman-avatar.png"
import ThreedotsCollapse from "./buttons/ThreedotsCollapse";


function Reviews() {
  return (
    <section id="reviews">
      <Container>
        <h1 className="display-6 text-center ">Reviews</h1>
        <div class="row text-center mx-auto">
        <div class="col-12 col-md-6 col-xl-6 ">
          <br></br>
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
							<blockquote class="blockquote">
								<p><i class="text-secondary" aria-hidden="true"></i>"El Instituto Robinson ofrece cursos adaptables para estudiantes de todos los niveles, ajustándose a las necesidades particulares de cada uno, ya sea que se necesite por razones laborales, académicas, etc. . Además, es muy recomendable para estudiantes avanzados de Inglés, profesores, traductores, intérpretes etc., ya que el estudiar con profesores nativos permite lograr una práctica periódica de conversación, escucha e interacción en Inglés REAL con alto grado de exigencia. En mi caso, por ejemplo, me ayudó a evitar pensar en Español, vicio generalmente arraigado en los hispanoparlantes." <i class="fas fa-fw fa-quote-right text-secondary" aria-hidden="true"></i></p>
							</blockquote>
							<figcaption class="blockquote-footer">Andrea - Profesora de inglés y traductora <time datetime="2020-09-01T12:00">(September 01 2020 12:00)</time></figcaption>
						</figure>
          }/>
          </div>
          }
        />
						
					</div>
					<div class="col-12 col-md-6 col-xl-6 ">
            <br></br>
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
							<blockquote class="blockquote">
								<p><i class="fas fa-fw text-secondary" aria-hidden="true"></i> "Robinson’s Institute ofrece grandes posibilidades para aquellas personas que tienen el interés o la necesidad de aprender inglés. En mi caso personal siempre fue una materia pendiente y con el escaso tiempo con el que cuento, no fue posible. El Instituto me ofreció la posibilidad de incorporar las clases de manera flexible, adecuándolas al ritmo de mi trabajo y tiempo libre. Es así como algunos días un profesor se acerca a mi oficina de trabajo, otros tomo las clases en algún bar o en el Instituto mismo. De esta forma siempre mantengo la constancia, indispensable para avanzar en el aprendizaje." <i class="fas fa-fw fa-quote-right text-secondary" aria-hidden="true"></i></p>
							</blockquote>
							<figcaption class="blockquote-footer">Cristian - Financiero <time datetime="2020-09-01T12:00">(September 01 2020 12:00)</time></figcaption>
						</figure>
              </div>
            }/>
            </div>
            }
          />
						
					</div>
          </div>
        </Container>
    </section>
  );
}

export default Reviews;
