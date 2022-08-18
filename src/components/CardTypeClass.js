import {Card} from 'react-bootstrap'

function CardTypeClass (props) {
 
    return (
  
    <Card
      bg="light"
      text='black'
      border = 'primary'
    
      className="text-center justify-content-center">
      <Card.Body>
        <Card.Title className="display-6 text-center"> {props.title} </Card.Title>
        <Card.Text className="lead text-black">
         {props.body}
        </Card.Text>
      </Card.Body>
    </Card>
  
    )
}

export default CardTypeClass;