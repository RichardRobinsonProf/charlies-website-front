
import { useEffect, useState } from "react";
import {useContext} from 'react'
import ContextChosenLanguage from '../../Context'

function PriceTag  (props) {
    const ctx = useContext(ContextChosenLanguage)
    const [borderStyle, setBorderStyle] = useState('borderblue')




    function clickHandler (e) {
        e.preventDefault()
        ctx.setDuration(props.time)
        ctx.setPrice(props.price)
        ctx.setPricePack(props.title)
        ctx.setWantsGroup(props.group)


    }


    useEffect(() => {
        if (ctx.duration === props.time && ctx.price === props.price) {
            setBorderStyle('borderorange')
        } else {
            setBorderStyle('borderblue')
        }

    }, [ctx.duration, ctx.price, props.time, props.price])

        
  
    return (
        <div className={`rounded mt-2 py-1 ${borderStyle}`} onClick={clickHandler}>
            <div className="row m-0">
                <div className="col-6 ps-2 ps-md-4">
                    <h4 className= "mt-2 mb-2 ms-0">{props.time}</h4>
                    </div>
                    <div className="col-6 align-items-md-center p-0">
                        <h4 className= "mt-2 mb-2 m-0 text-end pe-2 pe-md-4">{props.price}</h4>
                    </div>
            </div>
        </div>
    )
    
}

export default PriceTag