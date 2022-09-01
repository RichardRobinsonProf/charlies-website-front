import {  Container } from 'react-bootstrap';

function Prices () {
    return (
        <section id= "prices">
        <Container>
        <div className  = "text-center">
             <h1 className="display-6 text-center ">Prices</h1>
             <div className="row mx-auto">
					<div className="col-12 col-md-4 mb-4">
						<div className="card card-outline-success border-primary">
							<div className="card-header bg-success text-black text-center">
								<h1 className="display-6 text-center ">Starter</h1>
								<h4 className="text-center">1 hour per week</h4>
							</div>
							<div className="card-body">
								<p className="card-text">Temporibus omnis dolore officia nemo.</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 mb-4">
						<div className="card card-outline-warning border-primary">
							<div className="card-header bg-warning text-black text-center">
								<h2 className="display-6 text-center ">Semi-pro</h2>
								<h4>2 hours per week</h4>
							</div>
							<div className="card-body">
								<p className="card-text">Temporibus omnis dolore officia nemo.</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 mb-4">
						<div className="card card-outline-danger border-primary">
							<div className="card-header bg-danger text-black text-center">
								<h2 className="display-6 text-center">Pro</h2>
								<h4 >3 hours per week</h4>
							</div>
							<div className="card-body">
								<p className="card-text">Temporibus omnis dolore officia nemo.</p>
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