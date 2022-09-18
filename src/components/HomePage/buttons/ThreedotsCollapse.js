import {Collapse, Button} from 'react-bootstrap'
import { useContext, useEffect, useState } from "react";
import ContextChosenLanguage from '../../../Context'
import {chosenLanguage} from '../../../utils/language'
import {MdExpandMore} from 'react-icons/md'


function ThreedotsCollapse (props) {
    const [open, setOpen] = useState(false);
    const ctx = useContext(ContextChosenLanguage)
    const [text, setText] = useState(chosenLanguage(ctx.language))
    
    useEffect (() => {
        console.log(ctx.language)
        if (ctx.language === 'English') {
            setText(chosenLanguage('English'))
        } else {
            setText(chosenLanguage('Spanish'))
        }
    },[ctx.language])
    return (
        <div>
        <Button
        className="btn btn-secundary lead text-black"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
       
       {text.buttonMoreInfo} <MdExpandMore/> 
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