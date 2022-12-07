import {GoPrimitiveDot} from 'react-icons/go'
import PriceTag from './PriceTag';
import {useHistory} from 'react-router-dom'
import Context from '../../Context'
import {useContext, useState, Fragment, useEffect} from 'react'
import { chosenLanguage } from '../../utils/language'




function PriceItem (props) {
    const ctx = useContext(Context)
    const history = useHistory()
    const [isValid, setIsValid] = useState(true)
    const [text, setText] = useState(chosenLanguage(ctx.language))

    function buttonHandler (e) {
        e.preventDefault()
        if(ctx.wantsGroup === props.group && ctx.pricePack === props.title && ctx.duration !== '' && ctx.price !== '') {
                setIsValid(true)
                history.push('/form')
        } else {
            setIsValid(false)
        }
         
    }



    useEffect (() => {
        console.log(ctx.language)
        if (ctx.language === 'English') {
            setText(chosenLanguage('English'))
        } else {
            setText(chosenLanguage('Spanish'))
        }

     
    },[ctx.language])



    useEffect(() => {
        if (isValid === false) {
            setTimeout(() => {
                setIsValid(true)
            }, 5000);
            return () => {
                clearTimeout()
            }
        }
    }, [isValid]) 

    
    
    return (
    <Fragment>     
       <div className="row pb-4 ms-2 me-1">
        <div className="col-md-12 col-8">
            <h4 className=" text-black ms-md-2 ms-md-0 ">{props.title}</h4>
                <ul className="list-group list-group-flush ">
                    <li className="mt-0 pt-0 pb-0 ms-2 ms-md-0"><GoPrimitiveDot/>{props.subtitle}</li>
                    <li className="mt-0 pt-0 pb-0 ms-2 ms-md-0"><GoPrimitiveDot/>{props.subtitleTwo}</li>
                </ul>
         
            </div>    
        <div className=" col-12  pt-1">
            <PriceTag
            group = {props.group}
            title = {props.title}
             price={props.priceMonth}
             time = {props.month}


             pricesRenew={props.pricesRenewMonth}
           
            
             />
            <PriceTag
            group = {props.group}
            title = {props.title}
            price={props.priceThreeMonths}

            pricesRenew={props.pricesRenewThreeMonths}
            time = {props.threeMonths}
            />
        </div> 
        <div>
        {(!isValid) && (
                            <p className="error-text text-center">{text.pricesError}</p>
                          )}
            </div> 
       <div className='d-flex justify-content-center'>
       <button className='bg-blue w-100 mt-4' onClick={buttonHandler}>
            {props.button}
        </button>
        </div> 
        </div>
        </Fragment>
    )
}

export default PriceItem;