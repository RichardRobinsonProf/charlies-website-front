import HeadingPrices from "./HeadingPrices"
import PriceItem from "./PriceItem"

function priceColumn (props) {
    return (
    <div className= 'col-12 col-md-6'>
					<div className='pb-0'>
					<div className="px-md-3">
                <HeadingPrices
                 title= {props.title}
                />

                <PriceItem
                    group = {props.group}
                     title = {props.startertitle}


                     subtitle = {props.startersubtitle}
                     subtitleTwo =  {props.startersubtitleTwo}
                     priceMonth = {props.starterpriceMonth}
                     priceThreeMonths =  {props.starterpriceThreeMonths}
                  
                     pricesButtonIndividual =   {props.starterpricesButtonIndividual}
                     pricesButtonGroup = {props.starterpricesButtonGroup} 
                     pricesRenewMonth = {props.starterpricesRenewMonth} 
                     pricesRenewThreeMonths =  {props.starterpricesRenewThreeMonths}
                     month=     {props.startermonth} 
                     threeMonths=    {props.starterThreeMonths}
                     button = {props.title}
          
                />

                <PriceItem
                    group = {props.group}
                     title = {props.semiProtitle}


                     subtitle = {props.semiProsubtitle}
                     subtitleTwo =  {props.semiProsubtitleTwo}
                     priceMonth = {props.semiPropriceMonth}
                     priceThreeMonths =  {props.semiPropriceThreeMonths}
             
                     pricesButtonIndividual =   {props.semiPropricesButtonIndividual}
                     pricesButtonGroup = {props.semiPropricesButtonGroup} 
                     pricesRenewMonth = {props.semiPropricesRenewMonth} 
                     pricesRenewThreeMonths =  {props.semiPropricesRenewThreeMonths}
                     month=     {props.semiPromonth} 
                     threeMonths=    {props.semiProThreeMonths}
                     button = {props.title}
       
                />
                <PriceItem
                    group = {props.group}
                     title = {props.protitle}

                     subtitle = {props.prosubtitle}
                     subtitleTwo =  {props.prosubtitleTwo}
                     priceMonth = {props.propriceMonth}
                     priceThreeMonths =  {props.propriceThreeMonths}

                 
                     pricesButtonIndividual =   {props.propricesButtonIndividual}
                     pricesButtonGroup = {props.propricesButtonGroup} 
                     pricesRenewMonth = {props.propricesRenewMonth} 
                     pricesRenewThreeMonths =  {props.propricesRenewThreeMonths}
                     month=     {props.promonth} 
                     threeMonths=    {props.proThreeMonths}
                     button = {props.title}
          
                />
	
					</div>
					</div>
				</div> 
    )
}

export default priceColumn