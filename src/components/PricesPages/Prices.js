import ContextChosenLanguage from '../../Context'
import { chosenLanguage } from '../../utils/language'
import { useContext, useState, useEffect } from 'react'
import PriceColumn from "./PriceColumn";
import { useGetPricesQuery } from '../../servicesFirebase/pricesServices';


function Prices (props) {
    const ctx = useContext(ContextChosenLanguage)
    const [text, setText] = useState(chosenLanguage(ctx.language))
    const  {data : pricesData }  = useGetPricesQuery()
    const [starter, setStarter] = useState({})
    const [semiPro, setSemiPro] = useState({})
    const [pro, setPro] = useState({})

    const [starterGroup, setStarterGroup] = useState(false)
    const [semiProGroup, setSemiProGroup] = useState(false)
    const [proGroup, setProGroup] = useState(false)



    useEffect(() => {
        if (pricesData) {
            setStarter(pricesData.starter.price)
            setSemiPro(pricesData.semi_pro.price)
            setPro(pricesData.pro.price)
            setStarterGroup(pricesData.starter_group.price)
            setSemiProGroup(pricesData.semi_pro_group.price)
            setProGroup(pricesData.pro_group.price)

        }}, [pricesData])
    
    useEffect (() => {

        if (ctx.language === 'English') {
            setText(chosenLanguage('English'))
        } else {
            setText(chosenLanguage('Spanish'))
        }
    },[ctx.language])

    const rp = (price, currency) => {
        const priceWithPoints = price && price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        const priceToReturn = currency === 'usd' ? "USD $" + priceWithPoints : "ARS $" + priceWithPoints
        const returnPrice = priceToReturn || ""
        return returnPrice
    }


    return (
       <div className="p-3 mt-md-2 text-font p-md-5 pt-5">
    <div className="p-md-5 pt-5 ">
      <div className='row justify-content-center mb-3'>
			<PriceColumn
            group = {false}
            title = {text.formtitleIndividual}
            startertitle = {text.starterTitle}
            startersubtitle = {text.starterSubtitle}
            startersubtitleTwo = {text.starterSubtitleTwo}
            starterpriceMonth = {props.countryName !== "Argentina" ? rp(starter?.one_month_usd, "usd") : rp(starter?.one_month, "ars")}
            starterpriceThreeMonths = {props.countryName !== "Argentina" ? rp(starter?.three_months_usd, "usd") : rp(starter?.three_months, "ars")}
            starterpricesButtonIndividual = {text.pricesButtonIndividual}
            starterpricesButtonGroup = {text.pricesButtonGroup}
            starterpricesRenewMonth = {text.pricesRenewMonth}
            starterpricesRenewThreeMonths = {text.pricesRenewThreeMonths}
            startermonth = {text.pricesMonth}   
            starterThreeMonths = {text.pricesThreeMonths} 
            semiProtitle = {text.semiProTitle}
            semiProsubtitle = {text.semiProSubtitle}
            semiProsubtitleTwo = {text.semiProSubtitleTwo}
            semiPropriceMonth = {props.countryName !== "Argentina" ? rp(semiPro?.one_month_usd, "usd") : rp(semiPro?.one_month, "ars")}
            semiPropriceThreeMonths = {props.countryName !== "Argentina" ? rp(semiPro?.three_months_usd, "usd") : rp(semiPro?.three_months, "ars")}
            semiPropricesButtonIndividual = {text.pricesButtonIndividual}
            semiPropricesButtonGroup = {text.pricesButtonGroup}
            semiPropricesRenewMonth = {text.pricesRenewMonth}
            semiPropricesRenewThreeMonths = {text.pricesRenewThreeMonths}
            semiPromonth = {text.pricesMonth}   
            semiProThreeMonths = {text.pricesThreeMonths}
            protitle = {text.proTitle}
            prosubtitle = {text.proSubtitle}
            prosubtitleTwo = {text.proSubtitleTwo}
            propriceMonth = {props.countryName !== "Argentina" ? rp(pro?.one_month_usd, "usd") : rp(pro?.one_month, "ars")}
            propriceThreeMonths = {props.countryName !== "Argentina" ? rp(pro?.three_months_usd, "usd") : rp(pro?.three_months, "ars")}
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
             starterpriceMonth = {props.countryName !== "Argentina" ? rp(starterGroup?.one_month_usd, "usd") : rp(starterGroup?.one_month, "ars")}
             starterpriceThreeMonths = {props.countryName !== "Argentina" ? rp(starterGroup?.three_months_usd, "usd") : rp(starterGroup?.three_months, "ars")}
             starterpricesButtonIndividual = {text.pricesButtonIndividual}
             starterpricesButtonGroup = {text.pricesButtonGroup}
             starterpricesRenewMonth = {text.pricesRenewMonth}
             starterpricesRenewThreeMonths = {text.pricesRenewThreeMonths}
             startermonth = {text.pricesMonth}   
             starterThreeMonths = {text.pricesThreeMonths} 
             semiProtitle = {text.semiProTitle}
             semiProsubtitle = {text.semiProSubtitle}
             semiProsubtitleTwo = {text.semiProSubtitleTwo}
             semiPropriceMonth = {props.countryName !== "Argentina" ? rp(semiProGroup?.one_month_usd, "usd") : rp(semiProGroup?.one_month, "ars")}
             semiPropriceThreeMonths = {props.countryName !== "Argentina" ? rp(semiProGroup?.three_months_usd, "usd") : rp(semiProGroup?.three_months, "ars")}
             semiPropricesButtonIndividual = {text.pricesButtonIndividual}
             semiPropricesButtonGroup = {text.pricesButtonGroup}
             semiPropricesRenewMonth = {text.pricesRenewMonth}
             semiPropricesRenewThreeMonths = {text.pricesRenewThreeMonths}
             semiPromonth = {text.pricesMonth}   
             semiProThreeMonths = {text.pricesThreeMonths}
             protitle = {text.proTitle}
             prosubtitle = {text.proSubtitle}
             prosubtitleTwo = {text.proSubtitleTwo}
             propriceMonth = {props.countryName !== "Argentina" ? rp(proGroup?.one_month_usd, "usd") : rp(proGroup?.one_month, "ars")}
             propriceThreeMonths = {props.countryName !== "Argentina" ? rp(proGroup?.three_months_usd, "usd") : rp(proGroup?.three_months, "ars")}
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