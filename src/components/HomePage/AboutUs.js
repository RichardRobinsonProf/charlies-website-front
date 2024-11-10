import { Image} from "react-bootstrap";
import ImageLograrMas from "../../images/RIL Assets-02.png";
import { BsCheckLg } from 'react-icons/bs'
import useTranslation from "../../hooks/useTranslation";
import useWow from "../../hooks/useWow";



function AboutUs() {
  const {t} = useTranslation()
  useWow()
  return (
    <section id="aboutus" className="p-md-5 pt-5 p-3">
      <div className="">
      <div className="row me-md-2">
        <div className="col-md-5 mx-md-auto text-md-center mt-2">
        <h1 className="display-5 text-black wow opacity100">{t("classesTitle")}</h1>
           <p className="text-black text-font wow opacity100">{t("classesParagraph")}</p>
          </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="row justify-content-md-end">
          <Image className="w-75" src={ImageLograrMas} alt="imageLograrMas"/>
          </div>
          </div>
          <div className=" col-md-5 mt-md-5 order-first order-md-last wow opacity100">
          <ul className="mt-md-5 text-font textDecoNone p-0">
            <li className="wow opacity100Late "><BsCheckLg
            color="green"
            size="1.5em"
            className="me-1"
            />{t("classesVirtual")}</li>
            <li className="mt-2 wow opacity100">
            <BsCheckLg
            color="green"
            size="1.5em"
            className="me-1"
            />{t("classesGroupAndIndividual")}</li>
          </ul>
          </div>
        </div>
        </div>
    </section>
  );
}

export default AboutUs;
