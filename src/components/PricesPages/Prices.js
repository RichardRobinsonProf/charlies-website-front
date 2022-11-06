import PriceItem from "./PriceItem";
import ContextChosenLanguage from '../../Context'
import { chosenLanguage } from '../../utils/language'
import { useContext, useState, useEffect } from 'react'

function Prices (props) {
    const ctx = useContext(ContextChosenLanguage)
    const [text, setText] = useState(chosenLanguage(ctx.language))


    
    useEffect (() => {
        console.log(ctx.language)
        if (ctx.language === 'English') {
            setText(chosenLanguage('English'))
        } else {
            setText(chosenLanguage('Spanish'))
        }
    },[ctx.language])


    return (
       <div className="mt-md-5 text-font">
        <br/>
        <br/>
        <br/>
            <PriceItem 
                title = {text.starterTitle}
                subtitle = {text.starterSubtitle}
                subtitleTwo = {text.starterSubtitleTwo}
                priceMonth = {props.countryName !== "Argentina" ? text.starterPriceDollarsMonth : text.starterPricePesosMonth}
                priceYear = {props.countryName !== "Argentina" ? text.starterPriceDollarsYear : text.starterPricePesosYear}
                pricesButtonIndividual = {text.pricesButtonIndividual}
                pricesButtonGroup = {text.pricesButtonGroup}
                pricesRenewMonth = {text.pricesRenewMonth}
                pricesRenewYear = {text.pricesRenewYear}
                month = {text.pricesMonth}   
                year = {text.pricesYear} 
            />
            <PriceItem
                title = {text.semiProTitle}
                subtitle = {text.semiProSubtitle}
                subtitleTwo = {text.semiProSubtitleTwo}
                priceMonth = {props.countryName !== "Argentina" ? text.semiProPriceDollarsMonth : text.semiProPricePesosMonth}
                priceYear = {props.countryName !== "Argentina" ? text.semiProPriceDollarsYear : text.semiProPricePesosYear}
                pricesButtonIndividual = {text.pricesButtonIndividual}
                pricesButtonGroup = {text.pricesButtonGroup}
                pricesRenewMonth = {text.pricesRenewMonth}
                pricesRenewYear = {text.pricesRenewYear}
                month = {text.pricesMonth}   
                year = {text.pricesYear} 
            />
            <PriceItem
                title = {text.proTitle}
                subtitle = {text.proSubtitle}
                subtitleTwo = {text.proSubtitleTwo}
                priceMonth = {props.countryName !== "Argentina" ? text.proPriceDollarsMonth : text.proPricePesosMonth}
                priceYear = {props.countryName !== "Argentina" ? text.proPriceDollarsYear : text.proPricePesosYear}
                pricesButtonIndividual = {text.pricesButtonIndividual}
                pricesButtonGroup = {text.pricesButtonGroup}
                pricesRenewMonth = {text.pricesRenewMonth}
                pricesRenewYear = {text.pricesRenewYear}
                month = {text.pricesMonth}   
                year = {text.pricesYear} 
            />
       </div>
    )
}

export default Prices;