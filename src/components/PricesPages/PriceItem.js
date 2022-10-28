import {GoPrimitiveDot} from 'react-icons/go'
import PriceTag from './PriceTag';
import {Image} from 'react-bootstrap'
import ImageClasses from "../../images/RIL Assets-09.png";

function PriceItem () {
    return (
       <div className="row py-4 ms-2 me-1">
        <div className="col-md-3 col-8 offset-md-2">
            <h1 className="display-5 text-black ">Starter Pack</h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item mt-0 pt-0 pb-0 ps-0"><GoPrimitiveDot/>1 hora por semana</li>
                    <li className="list-group-item mt-0 pt-0 pb-0 ps-0"><GoPrimitiveDot/>1 clase por semana</li>
                </ul>
            <Image src={ImageClasses} className="w-50"/>
            </div>    
        <div className="col-md-6 col-8 pt-2">
            <PriceTag/>
            <PriceTag/>
        </div>  
       <div className='d-flex justify-content-center'>
       <button className='bg-blue me-3 mt-2'>
            Clases Individuales 
        </button>
        <button className='bg-blue ms-3 mt-2'>
            Buscar Grupo
        </button>
        </div> 
        </div>
    )
}

export default PriceItem;