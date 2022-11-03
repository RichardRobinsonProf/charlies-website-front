import {GoPrimitiveDot} from 'react-icons/go'
import PriceTag from './PriceTag';
import {Image} from 'react-bootstrap'
import ImageClasses from "../../images/RIL Assets-09.png";
import {useHistory} from 'react-router-dom'
import Context from '../../Context'
import { useContext } from 'react'


function PriceItem (props) {
    const history = useHistory()
    const ctx = useContext(Context)

    function buttonIndivualHandler (e) {
        e.preventDefault()
       ctx.setPricePack(props.title)
       ctx.setWantsGroup(false)
       history.push('/form')
    }

    function buttonGroupHandler (e) {
        e.preventDefault()
        ctx.setPricePack(props.title)
        ctx.setWantsGroup(true)
        history.push('/form')
    }
    return (
       <div className="row py-4 ms-2 me-1">
        <div className="col-md-3 col-8 offset-md-2">
            <h1 className="display-5 text-black ms-2 ms-md-0 ">{props.title}</h1>
                <ul className="list-group list-group-flush ">
                    <li className="mt-0 pt-0 pb-0 ms-2 ms-md-0"><GoPrimitiveDot/>{props.subtitle}</li>
                    <li className="mt-0 pt-0 pb-0 ms-2 ms-md-0"><GoPrimitiveDot/>{props.subtitleTwo}</li>
                </ul>
            <Image src={ImageClasses} className="w-50 d-none d-md-block"/>
            </div>    
        <div className="col-md-6 col-12 col-8 pt-2">
            <PriceTag
             price={props.priceMonth}
             pricesRenew={props.pricesRenewMonth}
             time = {props.month}
            
             />
            <PriceTag
            price={props.priceYear}
            pricesRenew={props.pricesRenewYear}
            time = {props.year}
            />
        </div>  
       <div className='d-flex justify-content-md-center'>
       <button className='bg-blue me-3 mt-2' onClick= {buttonIndivualHandler}>
            {props.pricesButtonIndividual}
        </button>
        <button className='bg-blue ms-3 mt-2' onClick= {buttonGroupHandler}>
            {props.pricesButtonGroup} 
        </button>
        </div> 
        </div>
    )
}

export default PriceItem;