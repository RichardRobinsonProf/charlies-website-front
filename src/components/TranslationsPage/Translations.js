import {Image} from 'react-bootstrap'
import ImageTranslation from '../../images/RIL Assets-07.png'
import {GoPrimitiveDot} from 'react-icons/go'


function Translations (props) {
    return (
        <div id="toptranslations">
            <div className="pt-5 ps-5 pe-5 " id="TranslationPage">
            <div className="row mt-5  ">
                <div className="col-md-4 col-12 offset-md-1 align-self-center">
                <h1 className="display-5 text-black ">Servicio de traducciones</h1>
                <p>{props.translationsParagraphOne}</p>  
                    </div>
                    <div className="col-md-7 col-12">
                <Image src={ImageTranslation} className="img-fluid d-none d-md-block w-50 d-flex mx-auto"/>
                    </div>
            </div>
         
            <div className="row mt-5">
                <div className="col-md-5 col-12 offset-md-1">
                <h1 className="display-5 text-black ">{props.translationsPublic}</h1>
                    </div>
                    <div className="col-md-6 col-12">
                        <ul className="ps-0 ms-0">
                            <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsPublicListOne}</li>
                            <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsPublicListTwo}</li>
                            <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsPublicListThree}</li>
                            <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsPublicListFour}</li>
                            <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsPublicListFive}</li>
                            <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsPublicListSix}</li>
                            <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsPublicListSeven}</li>
                            <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsPublicListEight}</li>
                            <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsPublicListNine}</li>
                        </ul>
                    </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-5 col-12 offset-md-1">
                    <ul  className="ps-0 ms-0 pe-5">
                        <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsPrivateListOne}</li>
                        <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsPrivateListTwo}</li>
                        <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsPrivateListThree}</li>
                        <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsPrivateListFour}</li>
                        <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsPrivateListFive}</li>
                        <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsPrivateListSix}</li>
                     </ul>
                    </div>
                    <div className="col-md-6 col-12 order-first order-md-last">
                        <h1 className="display-5 text-black ">{props.translationsPrivate}</h1> 
                    </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-md-5 col-12 offset-md-1">
                <h1 className="display-5 text-black ">{props.translationsInterpretation}</h1>
                    </div>
                    <div className="col-md-6 col-12">
                        <ul className="ps-0 ms-0">
                            <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsInterpretationListOne}</li>
                            <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsInterpretationListTwo}</li>
                            <li><i>{<GoPrimitiveDot className="me-1"/>}</i>{props.translationsInterpretationListThree}</li>
                        </ul>
                            </div>
                         </div>
                    </div>
                <div>        
            </div>  
     <div className = "bg-orange">
        <div className="p-5 text-center">
        
        <h1 className="display-5 text-black mt-5">¿Tienes más preguntas? </h1>
        <h1 className="display-5 text-black ">¡Contactanos!</h1>
        <p className='pb-0 mb-0 w-50 mx-auto'>Nuestro equipo está preparado para encontrar una solución a</p>
        <p>tus necesidades de traducción</p>
        <button className = "bg-blue mb-5"> Contactanos</button>
        </div>
        </div>
    </div>
  
    )
}

export default Translations