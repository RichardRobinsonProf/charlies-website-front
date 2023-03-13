import {Image} from 'react-bootstrap'
import ImageClasses from "../../images/RIL Assets-09.png";


function HeadingPrices (props) {
  return (
    <section className="row">
      <h4 className=" text-heading-prices mb-3"><Image src={ImageClasses} alt="imageClasses" className= "width15 me-2"/>{props.title}</h4>     
          </section>
  )
}

export default HeadingPrices;