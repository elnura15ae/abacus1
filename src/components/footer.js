import React from 'react'
import { Card } from 'react-bootstrap'


export default function Footer() {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>Contact us</Card.Header>
        <Card.Body>
          <Card.Title>Address</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
    </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">@copyright Camel Club vzw</Card.Footer>
      </Card>
    </div>
  )
}
