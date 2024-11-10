import { Image } from "react-bootstrap";
import ImageTranslation from "../../images/RIL Assets-07.png";
import { HashLink as Link } from "react-router-hash-link";
import useWow from "../../hooks/useWow";
import useTranslation from "../../hooks/useTranslation";
import { TbPoint } from "react-icons/tb";


function Translations(props) {
  const { text } = useTranslation();
  useWow();
  return (
    <div>
      <div
        className="pt-5 mt-4 mt-md-0 ps-md-5 pe-md-5 p-3"
        id="TranslationPage"
      >
        <div className="row mt-5 text-font">
          <div className="col-md-4 col-12 offset-md-1 align-self-center">
            <Image
              src={ImageTranslation}
              alt="ImageTranslation"
              className="img-fluid d-md-none w-50 d-flex mx-auto"
            />
            <h1 className="display-5 text-black wow opacity100">
              {text.translationsTitle}
            </h1>
            <p className="wow opacity100Late">
              {props.translationsParagraphOne}
            </p>
          </div>
          <div className="col-md-7 col-12">
            <Image
              src={ImageTranslation}
              alt="ImageTranslation"
              className="img-fluid d-none d-md-block w-50 d-flex mx-auto"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5 col-12 offset-md-1">
            <h1 className="display-5 text-black wow opacity100">
              {props.translationsPublic}
            </h1>
          </div>
          <div className="col-md-6 col-12">
            <ul className="ps-0 d-md-block ms-0 text-font wow opacity100Late list-unstyled list-md-styled">
              <StyleLid>{props.translationsPublicListOne}</StyleLid>
              <StyleLid>{props.translationsPublicListTwo}</StyleLid>
              <StyleLid>{props.translationsPublicListThree}</StyleLid>
              <StyleLid>{props.translationsPublicListFour}</StyleLid>
              <StyleLid>{props.translationsPublicListFive}</StyleLid>
              <StyleLid>{props.translationsPublicListSix}</StyleLid>
              <StyleLid>{props.translationsPublicListSeven}</StyleLid>
              <StyleLid>{props.translationsPublicListEight}</StyleLid>
              <StyleLid>{props.translationsPublicListNine}</StyleLid>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5 col-12 offset-md-1">
            <ul className="ps-0 ms-0 pe-5 text-font wow opacity100Late list-unstyled list-md-styled">
              <StyleLid>{props.translationsPrivateListOne}</StyleLid>
              <StyleLid>{props.translationsPrivateListTwo}</StyleLid>
              <StyleLid>{props.translationsPrivateListThree}</StyleLid>
              <StyleLid>{props.translationsPrivateListFour}</StyleLid>
              <StyleLid>{props.translationsPrivateListFive}</StyleLid>
              <StyleLid>{props.translationsPrivateListSix}</StyleLid>
            </ul>
          </div>
          <div className="col-md-6 col-12 order-first order-md-last">
            <h1 className="display-5 text-black wow opacity100">
              {props.translationsPrivate}
            </h1>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-md-5 col-12 offset-md-1">
            <h1 className="display-5 text-black wow opacity100">
              {props.translationsInterpretation}
            </h1>
          </div>
          <div className="col-md-6 col-12">
            <ul className="ps-0 ms-0 text-font wow opacity100Late list-unstyled list-md-styled">
              <StyleLid>{props.translationsInterpretationListOne}</StyleLid>
              <StyleLid>{props.translationsInterpretationListTwo}</StyleLid>
              <StyleLid>{props.translationsInterpretationListThree}</StyleLid>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
      <div className="bg-orange">
        <div className="p-md-5 p-3 text-center text-font">
          <h1 className="display-5 text-black mt-5 wow opacity100">
            {text.translationOrangeBgTitle}
          </h1>
          <h1 className="display-5 text-black wow opacity100Late">
            {text.translationOrangeBgSubtitle}!
          </h1>
          <p className="pb-0 mb-0 w-md-50 mx-auto wow opacity100Late">
            {text.translationOrangeBgParagraphOne}
          </p>
          <p className="wow opacity100Late">
            {text.translationOrangeBgParagraphTwo}
          </p>

          <Link to="/translations#contactus">
            <button className="bg-blue mb-5 wow opacity100Latest inputButton">
              {text.translationOrangeBgButton}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Translations;


const StyleLid = (props) => {
  return (
    <div className="d-flex align-items-start gap">
        <div className="d-flex mt-1"><TbPoint/></div> {props.children}
    </div>
  );
}
