import Logo from '../../images/Logo.png'
import Image from 'react-bootstrap/Image'

function Hero () {
    return (
    <section id="section-hero" className="text-center text-white d-flex justify-content-center align-items-center py-5">
    
        <div className="container">
            <br></br>
           
            <br></br>
            <Image className="img-fluid" src={Logo}></Image>
            <br></br>
            <br></br>
            <br></br>
            <p className="display-6 text-black">A professional, personalised and flexible language institute</p>
            <br></br>
            <p className="lead text-black">Would you like to learn a language? Take classes with us and not only will you learn by practising with a native teacher, but you can also create your own personalized course based on your needs.</p>
            <p className="lead text-black">We offer classes in these languages: <span className='display'>English, French, German, Portuguese, Italian, Chinese, Spanish for foreigners</span></p>

            <br></br>
            
       
            <a href="#classes" className="btn btn-lg btn-primary text-white"><i className="" aria-hidden="true"></i>More info </a>
        
        </div>
    </section>
    )
}

export default Hero;