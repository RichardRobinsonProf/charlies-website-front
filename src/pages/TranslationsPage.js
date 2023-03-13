
import Footer from "../components/HomePage/Footer";
import NavbarComplete from "../components/HomePage/NavbarComplete";
import Contact from "../components/HomePage/Contact";
import Translations from "../components/TranslationsPage/Translations";
import { useContext, useState, useEffect } from "react";
import ContextChosenLanguage from "../Context";
import { chosenLanguage } from "../utils/language";


function TranslationsPage () {
    const ctx = useContext(ContextChosenLanguage);
    const [text, setText] = useState(chosenLanguage(ctx.language));
    
    useEffect(() => {
    
      if (ctx.language === "English") {
        setText(chosenLanguage("English"));
      } else {
        setText(chosenLanguage("Spanish"));
      }
    }, [ctx.language]);
    return( 
    <div>
        <NavbarComplete/> 
        <Translations
        translationsParagraphOne = {text.translationsParagraphOne}
        translationsPublic = {text.translationsPublic}
        translationsPublicListOne = {text.translationsPublicListOne}
        translationsPublicListTwo = {text.translationsPublicListTwo}
        translationsPublicListThree = {text.translationsPublicListThree}
        translationsPublicListFour = {text.translationsPublicListFour}
        translationsPublicListFive = {text.translationsPublicListFive}
        translationsPublicListSix = {text.translationsPublicListSix}
        translationsPublicListSeven = {text.translationsPublicListSeven}
        translationsPublicListEight = {text.translationsPublicListEight}
        translationsPublicListNine = {text.translationsPublicListNine}
        translationsPrivate = {text.translationsPrivate}
        translationsPrivateListOne = {text.translationsPrivateListOne}
        translationsPrivateListTwo = {text.translationsPrivateListTwo}
        translationsPrivateListThree = {text.translationsPrivateListThree}
        translationsPrivateListFour = {text.translationsPrivateListFour}
        translationsPrivateListFive = {text.translationsPrivateListFive}
        translationsPrivateListSix = {text.translationsPrivateListSix}
        translationsInterpretation = {text.translationsInterpretation}
        translationsInterpretationListOne = {text.translationsInterpretationListOne}
        translationsInterpretationListTwo = {text.translationsInterpretationListTwo}
        translationsInterpretationListThree = {text.translationsInterpretationListThree}
        />
        <Contact/>
        <Footer/>
    </div>
    )
}

export default TranslationsPage;