import CompaniesThatTrustUsImage from '../../images/RIL Assets-08.png';
import {Image} from 'react-bootstrap'
import { useContext, useState, useEffect } from "react";
import ContextChosenLanguage from "../../Context";
import { chosenLanguage } from "../../utils/language";


function CompaniesThatTrustUs () {
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
      
    <div className="row text-center ms-2 me-2 ms-md-5 me-md-5 mb-5 mt-5">
        <h1 className="display-5 text-black">{text.companiesThatTrustUs}</h1>
        <Image className=" w-100 mx-auto" src={CompaniesThatTrustUsImage} alt="imageCompaniesThatTrustUs"/>
      </div>
      	
    )
}
export default CompaniesThatTrustUs