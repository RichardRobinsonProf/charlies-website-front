import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function Groups () {
    return (
        <section id = "groups">
        <div className="text-center">
        <h1 className="display-6 text-center ">Groups</h1>
        <Link to= '/form'>
        <Button className="btn btn-lg btn-primary text-white" >
        Search Groups
    </Button>
    </Link>
    </div>
    </section>
    )
}

export default Groups