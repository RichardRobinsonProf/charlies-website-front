import {Image} from 'react-bootstrap'
import ImageClasses from "../../images/RIL Assets-09.png";


function HeadingPrices (props) {
  return (
    <div className="row">
      <h4 className=" text-black ms-2 ms-md-0 "><Image src={ImageClasses} className= "w-25"/>{props.title}</h4>     
            </div>
  )
}

export default HeadingPrices;