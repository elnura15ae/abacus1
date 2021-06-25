import React from 'react'
import {Card, CardDeck, Button} from 'react-bootstrap'
import Image from '../img/02.jpg'


export default function CardsD() {
  
    return (
        <div>
<CardDeck>
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Start Demo</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Start Demo</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Start Demo</Button>
  </Card.Body>
</Card>

</CardDeck>
        </div>
    )
}
