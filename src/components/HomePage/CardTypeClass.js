import {Card} from 'react-bootstrap'

function CardTypeClass (props) {
 
    return (
  
    <Card
      bg="background-gradient"
      text='black'
      border = 'primary'
      className="text-center justify-content-center background-gradient">
      <Card.Body>
        <Card.Title className=""> {props.title} </Card.Title>
        <div className="lead text-black">
         {props.body}
        </div>
      </Card.Body>
    </Card>
  
    )
}

export default CardTypeClass;