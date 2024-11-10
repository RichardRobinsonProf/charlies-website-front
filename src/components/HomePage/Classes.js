import { Image } from "react-bootstrap";
import ImageClasses from "../../images/RIL Assets-03.png";
import useTranslation from "../../hooks/useTranslation";
import useWow from "../../hooks/useWow";

function ContainerCards() {
  const { t, text } = useTranslation()
  useWow()

  return (
    <section id="classes" className="pt-5 ps-md-5 pe-md-4 text-font p-3 p-md-5 pb-0">
      <div className="row text-md-center">
        <h1 className="display-5 text-black wow opacity100">
          {text.pricesTitle}
        </h1>
      </div>
      <div className="row ms-md-3 me-md-3">
        <div className="col-md-5 offset-md-1 wow opacity100Late">
          <p>{t("classesParagraphOne")}</p>
        </div>
        <div className="col-md-5">
          <p>
            <Image className=" w-100" src={ImageClasses} alt="imageClasses" />
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContainerCards;
