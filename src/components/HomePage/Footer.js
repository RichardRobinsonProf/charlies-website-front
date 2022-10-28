import {GrInstagram,GrFacebook } from 'react-icons/gr';

function Footer () {
    return (
        <section id="footer" className= "p-5" >
            <div className='row text-white'>
            <div className="col-12 offset-md-1 col-md-4">
                <h4 className='mb-3'>Sobre</h4>
                    <div className="opacity-50">
                    <p><a href='#aboutus' className="text-decoration-none text-white">Cursos de idiomas</a></p>
                    <p><a href='#classes' className="text-decoration-none text-white">Clases grupales</a></p>
                    <p><a href='#' className="text-decoration-none text-white">Servicio de traducciones</a></p>
                    <p><a href='#classes' className="text-decoration-none text-white">Paquetes</a></p>
                    <p><a href='#classes' className="text-decoration-none text-white">Opiniones</a></p>
                    <p><a href='#Contact' className="text-decoration-none text-white">Contacto</a></p>
                    <p><a href='#classes' className="text-decoration-none text-white">Cursos de idiomas</a></p>
                    </div>
                </div>   <div className="col-12 col-md-4">
                <h4 className='mb-3'>Contacto</h4>
                    <div className="opacity-50">
                    <p><a href='#' className="text-decoration-none text-white">contacto@robinsonsinstituteoflanguage.com</a></p>
                    <p><a href='#' className="text-decoration-none text-white">+54 555 5555</a></p>
                    <p><a href='#' className="text-decoration-none text-white">Carranza 55, Capital Federal, Argentina</a></p>
                    
                    </div>
                </div>   <div className="col-12 col-md-3">
                <h4 className='mb-3'>Siguenos</h4>
                        <i>
                        <GrInstagram
                         color="white"
                         size="1.5em"
                         className="me-3"
                        />
                        </i>
                        <i>
                        <GrFacebook
                            color="white"
                            size="1.5em"
                            className="me-1"
                        />
                        </i>
                </div>  
            </div>
            
    </section>

    )
}

export default Footer;