import { Image } from "react-bootstrap";
import ImageClasses from "../../images/RIL Assets-07.png";
import BlueButton from "../HomePage/buttons/BlueButton";
import useWow from "../../hooks/useWow";
import useTranslation from "../../hooks/useTranslation";


function Translations() {
  useWow()
  const {text, t} = useTranslation()

  return (
    <section id="translations" className="ps-md-5 pe-md-3 pt-md-2 pt-md-0 p-3 text-center">
       <div className="row ms-md-3 me-md-3 align-items-center">
        <div className= "col-md-5 offset-md-1 mt-5 mt-md-0">
        <h1 className="display-5 text-black wow opacity100">{text.translationsTitle}</h1>
          <p className="wow opacity100">
            {t("translationsParagraphOne")}
          </p>
          <BlueButton
							text= {t("translationButton")}
							link = "/translations"
              extraClasses= "ms-0 wow opacity100Late inputButton"
              />
        </div>
        <div className= "col-md-5">
          <div className="row text-center">
          <p>
          <Image className="w-75 offset-md-1" src={ImageClasses} alt="imageClasses"/>
          </p>
          </div>
        </div>
    </div>
    </section>
  );
}

export default Translations;
