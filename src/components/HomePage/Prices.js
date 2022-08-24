import { Image, Container } from 'react-bootstrap';
import Team from '../../images/Team.png'

function Prices () {
    return (
        <section id= "prices">
        <Container>
        <div className  = "text-center">
             <h1 className="display-6 text-center ">Prices</h1>
             <div class="row mx-auto">
					<div class="col-12 col-md-4 mb-4">
						<div class="card card-outline-success border-primary">
							<div class="card-header bg-success text-black text-center">
								<h1 className="display-6 text-center ">Starter</h1>
								<h4 className="text-center">1 hour per week</h4>
							</div>
							<div class="card-body">
								<p class="card-text">Temporibus omnis dolore officia nemo.</p>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-4 mb-4">
						<div class="card card-outline-warning border-primary">
							<div class="card-header bg-warning text-black text-center">
								<h2 className="display-6 text-center ">Semi-pro</h2>
								<h4>2 hours per week</h4>
							</div>
							<div class="card-body">
								<p class="card-text">Temporibus omnis dolore officia nemo.</p>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-4 mb-4">
						<div class="card card-outline-danger border-primary">
							<div class="card-header bg-danger text-black text-center">
								<h2 className="display-6 text-center">Pro</h2>
								<h4 >3 hours per week</h4>
							</div>
							<div class="card-body">
								<p class="card-text">Temporibus omnis dolore officia nemo.</p>
							</div>
						</div>
					</div>
				</div>
        </div>
        </Container>
        </section>
    )
}

export default Prices;