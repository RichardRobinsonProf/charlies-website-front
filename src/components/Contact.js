import emailjs from 'emailjs-com';



console.log(process.env)
function Contact () {
	function sendEmail (e) {
		e.preventDefault();
	
		emailjs.sendForm(process.env.REACT_APP_emailjs_serviceid, process.env.REACT_APP_emailjs_templateid, e.target, process.env.REACT_APP_emailjs_userid)
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			}
		);
		e.target.reset();
	}
    return(
	<section id="contact">
		<div className="text-center">
		
		<h1 className="display-6 text-center">Contact</h1>
	

    <div className="align-items-center text-center bg-light container">

    <br></br>
			<form className="mb-4" onSubmit={sendEmail}>
				<div className="row">
					<div className="col-12 col-md-6">
						<div className="mb-3">
							<label htmlFor="name" className="form-label"><p className="lead text-black">Name</p></label>
							<input id="name" type="text" className="form-control" placeholder="Enter your name" name="name"/>
						</div>
						<div className="mb-3">
							<label htmlFor="email" className="form-label"><p className="lead text-black">Email</p></label>
							<input id="email" type="email" className="form-control" placeholder="Enter your email" name="email"/>
						</div>
                        <div className="mb-3">
							<label htmlFor="Telephone" className="form-label"><p className="lead text-black">Telephone</p></label>
							<input id="email" type="email" className="form-control" placeholder="Enter your telephone" name="email"/>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="mb-3">
							<label htmlFor="message" className="form-label"><p className="lead text-black">Message</p></label>
							<textarea id="message" className="form-control" rows="4" placeholder="Enter your message" name = "message"></textarea>
						</div>
					</div>
				</div>
				<button type="submit" className="btn btn-lg btn-primary text-white">Send Message</button>
			</form>
    </div>
	</div>
	</section>
    )
}

export default Contact;