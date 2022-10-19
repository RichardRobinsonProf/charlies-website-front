import { Image, Container,Row, Col } from "react-bootstrap";
import Translation from "../../images/Translation.png";
import ThreedotsCollapse from "./buttons/ThreedotsCollapse";
import Public from "../../images/Translating-public.png";
import Private from "../../images/Translating-private.png";
import Company from "../../images/Company.png";
import CardTypeClass from "./CardTypeClass";
import { useContext, useEffect, useState } from "react";
import ContextChosenLanguage from '../../Context'
import {chosenLanguage} from '../../utils/language'


function Translations() {
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
    <section id="translations">
      

    </section>
  );
}

export default Translations;
