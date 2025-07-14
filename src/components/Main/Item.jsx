import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { removeDashboard } from '../../redux/reducers/dashboardReducer';
import { NavLink } from 'react-router';


const Item = (props) => {
    const dispatch = useDispatch();

    return (
        <Card style={{ width: '18rem', margin: '0.5rem'}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text} ||
                    Amount of tasks: {props.amount} ||
                    id: {props.id}
                </Card.Text>
                <NavLink to={"/dashboard/" + props.id}><Button variant="primary">Start editing</Button></NavLink>
                <Button style={{marginLeft: "10px"}} variant="danger" onClick={() => dispatch(removeDashboard(props.id))}>Remove</Button>
            </Card.Body>
        </Card>
    )
}

export default Item;