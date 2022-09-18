import {Button,Modal} from 'react-bootstrap';

function ModalForm (props) {

    return (
        <>   
        <Modal className="background-gradient2" show={props.show} onHide={props.handleClose}>
            <div>
            <Modal.Header  closeButton>
            <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header >
            <Modal.Body >{props.body}</Modal.Body>
            <Modal.Footer>
            {props.negative !== "none" ? <Button variant="secondary" onClick={props.handleNegative}>
                {props.negative}
            </Button> : null}             
            <Button variant="primary" onClick={props.handlePositive}>
                {props.positive}
            </Button>
            </Modal.Footer>
            </div>
        </Modal>
        </>
    );


}

export default ModalForm;
