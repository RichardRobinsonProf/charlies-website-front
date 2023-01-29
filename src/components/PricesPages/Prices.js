import ContextChosenLanguage from '../../Context'
import { chosenLanguage } from '../../utils/language'
import { useContext, useState, useEffect } from 'react'
import PriceColumn from "./PriceColumn";


function Prices (props) {
    const ctx = useContext(ContextChosenLanguage)
    const [text, setText] = useState(chosenLanguage(ctx.language))
    
    useEffect (() => {

        if (ctx.language === 'English') {
            setText(chosenLanguage('English'))
        } else {
            setText(chosenLanguage('Spanish'))
        }
    },[ctx.language])


    return (
       <div className="mt-md-5 text-font p-md-5 pt-5 px-2">
        <div className="p-md-5 pt-5 px-1">
      <div className='row justify-content-center mb-3'>
			<PriceColumn
            group = {false}
            title = {text.formtitleIndividual}
            startertitle = {text.starterTitle}
            startersubtitle = {text.starterSubtitle}
            startersubtitleTwo = {text.starterSubtitleTwo}
            starterpriceMonth = {props.countryName !== "Argentina" ? text.starterPriceDollarsMonth : text.starterPricePesosMonth}
            starterpriceThreeMonths = {props.countryName !== "Argentina" ? text.starterPriceDollarsThreeMonths : text.starterPricePesosThreeMonths}
            starterpricesButtonIndividual = {text.pricesButtonIndividual}
            starterpricesButtonGroup = {text.pricesButtonGroup}
            starterpricesRenewMonth = {text.pricesRenewMonth}
            starterpricesRenewThreeMonths = {text.pricesRenewThreeMonths}
            startermonth = {text.pricesMonth}   
            starterThreeMonths = {text.pricesThreeMonths} 
            semiProtitle = {text.semiProTitle}
            semiProsubtitle = {text.semiProSubtitle}
            semiProsubtitleTwo = {text.semiProSubtitleTwo}
            semiPropriceMonth = {props.countryName !== "Argentina" ? text.semiProPriceDollarsMonth : text.semiProPricePesosMonth}
            semiPropriceThreeMonths = {props.countryName !== "Argentina" ? text.semiProPriceDollarsThreeMonths : text.semiProPricePesosThreeMonths}
            semiPropricesButtonIndividual = {text.pricesButtonIndividual}
            semiPropricesButtonGroup = {text.pricesButtonGroup}
            semiPropricesRenewMonth = {text.pricesRenewMonth}
            semiPropricesRenewThreeMonths = {text.pricesRenewThreeMonths}
            semiPromonth = {text.pricesMonth}   
            semiProThreeMonths = {text.pricesThreeMonths}
            protitle = {text.proTitle}
            prosubtitle = {text.proSubtitle}
            prosubtitleTwo = {text.proSubtitleTwo}
            propriceMonth = {props.countryName !== "Argentina" ? text.proPriceDollarsMonth : text.proPricePesosMonth}
            propriceThreeMonths = {props.countryName !== "Argentina" ? text.proPriceDollarsThreeMonths : text.proPricePesosThreeMonths}
            propricesButtonIndividual = {text.pricesButtonIndividual}
            propricesButtonGroup = {text.pricesButtonGroup}
            propricesRenewMonth = {text.pricesRenewMonth}
            propricesRenewThreeMonths = {text.pricesRenewThreeMonths}
            promonth = {text.pricesMonth}   
            proThreeMonths = {text.pricesThreeMonths} 
        
            />
			<PriceColumn

            group = {true}


             title = {text.footerGroupClasses}
             startertitle = {text.starterTitle}
             startersubtitle = {text.starterSubtitle}
             startersubtitleTwo = {text.starterSubtitleTwo}
             starterpriceMonth = {props.countryName !== "Argentina" ? text.starterPriceDollarsMonthGroup : text.starterPricePesosMonthGroup}
             starterpriceThreeMonths = {props.countryName !== "Argentina" ? text.starterPriceDollarsThreeMonthsGroup : text.starterPricePesosThreeMonthsGroup}
             starterpricesButtonIndividual = {text.pricesButtonIndividual}
             starterpricesButtonGroup = {text.pricesButtonGroup}
             starterpricesRenewMonth = {text.pricesRenewMonth}
             starterpricesRenewThreeMonths = {text.pricesRenewThreeMonths}
             startermonth = {text.pricesMonth}   
             starterThreeMonths = {text.pricesThreeMonths} 
             semiProtitle = {text.semiProTitle}
             semiProsubtitle = {text.semiProSubtitle}
             semiProsubtitleTwo = {text.semiProSubtitleTwo}
             semiPropriceMonth = {props.countryName !== "Argentina" ? text.semiProPriceDollarsMonthGroup : text.semiProPricePesosMonthGroup}
             semiPropriceThreeMonths = {props.countryName !== "Argentina" ? text.semiProPriceDollarsThreeMonthsGroup : text.semiProPricePesosThreeMonthsGroup}
             semiPropricesButtonIndividual = {text.pricesButtonIndividual}
             semiPropricesButtonGroup = {text.pricesButtonGroup}
             semiPropricesRenewMonth = {text.pricesRenewMonth}
             semiPropricesRenewThreeMonths = {text.pricesRenewThreeMonths}
             semiPromonth = {text.pricesMonth}   
             semiProThreeMonths = {text.pricesThreeMonths}
             protitle = {text.proTitle}
             prosubtitle = {text.proSubtitle}
             prosubtitleTwo = {text.proSubtitleTwo}
             propriceMonth = {props.countryName !== "Argentina" ? text.proPriceDollarsMonthGroup : text.proPricePesosMonthGroup}
             propriceThreeMonths = {props.countryName !== "Argentina" ? text.proPriceDollarsThreeMonthsGroup : text.proPricePesosThreeMonthsGroup}
             propricesButtonIndividual = {text.pricesButtonIndividual}
             propricesButtonGroup = {text.pricesButtonGroup}
             propricesRenewMonth = {text.pricesRenewMonth}
             propricesRenewThreeMonths = {text.pricesRenewThreeMonths}
             promonth = {text.pricesMonth}   
             proThreeMonths = {text.pricesThreeMonths} 
           
            />
			</div>
        </div>
       </div>
    )
}

export default Prices;