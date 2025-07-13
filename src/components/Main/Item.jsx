import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = (props) => {
    return (
        <Card style={{ width: '18rem', margin: '0.5rem'}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text} - 
                    Amount of tasks: {props.amount}
                </Card.Text>
                <Button variant="primary">Start editing</Button>
            </Card.Body>
        </Card>
    )
}

export default Item;