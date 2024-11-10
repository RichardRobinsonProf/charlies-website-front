import Footer from "../components/HomePage/Footer";
import NavbarComplete from "../components/HomePage/NavbarComplete";
import Contact from "../components/HomePage/Contact";
import Translations from "../components/TranslationsPage/Translations";
import useTranslation from "../hooks/useTranslation";

function TranslationsPage() {
  const {text, t} = useTranslation();

  return (
    <div>
      <NavbarComplete />
      <Translations
        translationsParagraphOne={t("translationsParagraphOne")}
        translationsPublic={text.translationsPublic}
        translationsPublicListOne={t("translationsPublicListOne")}
        translationsPublicListTwo={t("translationsPublicListTwo")}
        translationsPublicListThree={t("translationsPublicListThree")}
        translationsPublicListFour={t("translationsPublicListFour")}
        translationsPublicListFive={t("translationsPublicListFive")}
        translationsPublicListSix={t("translationsPublicListSix")}
        translationsPublicListSeven={t("translationsPublicListSeven")}
        translationsPublicListEight={t("translationsPublicListEight")}
        translationsPublicListNine={t("translationsPublicListNine")}
        translationsPrivate={text.translationsPrivate}
        translationsPrivateListOne={text.translationsPrivateListOne}
        translationsPrivateListTwo={text.translationsPrivateListTwo}
        translationsPrivateListThree={text.translationsPrivateListThree}
        translationsPrivateListFour={text.translationsPrivateListFour}
        translationsPrivateListFive={text.translationsPrivateListFive}
        translationsPrivateListSix={text.translationsPrivateListSix}
        translationsInterpretation={text.translationsInterpretation}
        translationsInterpretationListOne={
          text.translationsInterpretationListOne
        }
        translationsInterpretationListTwo={
          text.translationsInterpretationListTwo
        }
        translationsInterpretationListThree={
          text.translationsInterpretationListThree
        }
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default TranslationsPage;
