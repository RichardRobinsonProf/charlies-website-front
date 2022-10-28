import CompaniesThatTrustUsImage from '../../images/RIL Assets-08.png';
import {Image} from 'react-bootstrap'

function CompaniesThatTrustUs () {
    return (
    <div className="row text-center ms-2 me-2 ms-md-5 me-md-5 mb-5 mt-5">
        <h1 className="display-5 text-black">Empresas que confian en nosotros</h1>
        <Image className=" w-100 mx-auto" src={CompaniesThatTrustUsImage}/>
      </div>
      	
    )
}
export default CompaniesThatTrustUs