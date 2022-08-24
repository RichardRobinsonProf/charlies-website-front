import {Collapse, Button} from 'react-bootstrap'
import {useState} from 'react'


function ThreedotsCollapse (props) {
    const [open, setOpen] = useState(false);
    return (
        <div>
        <Button
        className="btn btn-secundary text-black"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          . . .
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <br></br>
           {props.text}
          </div>
        </Collapse>
        </div>
    )

}
export default ThreedotsCollapse;