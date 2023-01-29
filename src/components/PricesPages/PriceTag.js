
import { useEffect, useState } from "react";
import {useContext} from 'react'
import ContextChosenLanguage from '../../Context'

function PriceTag  (props) {
    const ctx = useContext(ContextChosenLanguage)
    const [isSelected, setIsSelected] = useState(false)
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

    }, [ctx.duration, ctx.price])

        
  
    return (
        <div className={`w-100 rounded mt-2 py-1 ${borderStyle}`} onClick={clickHandler}>
            <div className="row">
                <div className="col-5 ms-1">
                    <h4 className= "mt-2 mb-2 ms-3">{props.time}</h4>
                    </div>
                    <div className="col-6 d-flex align-items-md-center text-end ">
                    <h4 className= "mt-2 mb-2 ms-2">{props.price}</h4>
                    </div>
            </div>
        </div>
    )
    
}

export default PriceTag