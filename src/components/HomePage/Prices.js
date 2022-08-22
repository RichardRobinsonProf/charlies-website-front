import { Image, Container } from 'react-bootstrap';
import Team from '../../images/Team.png'

function Prices () {
    return (
        <section id= "prices">
        <Container>
        <div className  = "text-center">
             <h1 className="display-6 text-center ">Prices</h1>
             <div class="row">
					<div class="col-12 col-md-4 mb-4">
						<div class="card card-outline-success">
							<div class="card-header bg-success text-white text-center">
								<h1 className="display-6 text-center ">Starter</h1>
								<h4 className="text-center">Free</h4>
							</div>
							<div class="card-body">
								<p class="card-text">Temporibus omnis dolore officia nemo.</p>
							</div>
							<ul class="list-group list-group-flush">
								<li class="list-group-item"><i class="fas fa-fw fa-paint-brush" aria-hidden="true"></i> Item description</li>
								<li class="list-group-item"><i class="fab fa-fw fa-instagram" aria-hidden="true"></i> Item description</li>
							</ul>
							<div class="card-footer text-center">
								<a href="#0" class="btn btn-success btn-lg">Select plan</a>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-4 mb-4">
						<div class="card card-outline-warning">
							<div class="card-header bg-warning text-white text-center">
								<h2 className="display-6 text-center ">Semi-pro</h2>
								<h4>$1.99 / month</h4>
							</div>
							<div class="card-body">
								<p class="card-text">Temporibus omnis dolore officia nemo.</p>
							</div>
							<ul class="list-group list-group-flush">
								<li class="list-group-item"><i class="fas fa-fw fa-paint-brush" aria-hidden="true"></i> Item description</li>
								<li class="list-group-item"><i class="fab fa-fw fa-instagram" aria-hidden="true"></i> Item description</li>
								<li class="list-group-item"><i class="fas fa-fw fa-cogs" aria-hidden="true"></i> Item description</li>
							</ul>
							<div class="card-footer text-center">
								<a href="#0" class="btn btn-warning btn-lg">Select plan</a>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-4 mb-4">
						<div class="card card-outline-danger">
							<div class="card-header bg-danger text-white text-center">
								<h2 className="display-6 text-center">Pro</h2>
								<h4 >$4.99 / month</h4>
							</div>
							<div class="card-body">
								<p class="card-text">Temporibus omnis dolore officia nemo.</p>
							</div>
							<ul class="list-group list-group-flush">
								<li class="list-group-item"><i class="fas fa-fw fa-paint-brush" aria-hidden="true"></i> Item description</li>
								<li class="list-group-item"><i class="fab fa-fw fa-instagram" aria-hidden="true"></i> Item description</li>
								<li class="list-group-item"><i class="fas fa-fw fa-cogs" aria-hidden="true"></i> Item description</li>
								<li class="list-group-item"><i class="fas fa-fw fa-cloud" aria-hidden="true"></i> Item description</li>
							</ul>
							<div class="card-footer text-center">
								<a href="#0" class="btn btn-danger btn-lg">Select plan</a>
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