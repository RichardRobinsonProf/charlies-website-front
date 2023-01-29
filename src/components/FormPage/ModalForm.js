import {Modal} from 'react-bootstrap';

function ModalForm (props) {

    return (
        <>   
        <Modal show={props.show} onHide={props.handleClose}>
            <div>
            <Modal.Header  closeButton>
            <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header >
            <Modal.Body >{props.body}</Modal.Body>
            <Modal.Footer>
            {props.negative !== "none" ? <button className= "bg-blue" onClick={props.handleNegative}>
                {props.negative}
            </button> : null}             
            <button className= "bg-blue"  onClick={props.handlePositive}>
                {props.positive}
            </button>
            </Modal.Footer>
            </div>
        </Modal>
        </>
    );


}

export default ModalForm;
