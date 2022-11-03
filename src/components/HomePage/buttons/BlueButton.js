import {Link} from 'react-router-dom'

function BlueButton (props) {
    return (

    <Link 
    to={props.link}
    hash={props.hash}
    >
    <button  className={`bg-blue ${props.extraClasses}`}>{props.text}</button>
    </Link>
    )
}
export default BlueButton