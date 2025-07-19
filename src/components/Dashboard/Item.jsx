import React from 'react'
import Card from 'react-bootstrap/Card';
import { useDraggable } from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../redux/reducers/dashboardReducer';
import { useParams } from 'react-router';

function Item (props) {
    const dispatch = useDispatch();
    let pageIndex = useParams();

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id,
    });

    const style = transform ? {
        transform: CSS.Transform.toString(transform),
    } : undefined;

    return (
        <Card>
            <Card body style={style} ref={setNodeRef} {...attributes} {...listeners}>
                {props.text}
            </Card>
            <Button variant='danger' onClick={() => dispatch(removeTask({
                dashboardId: pageIndex.id,
                taskId: props.id,
            }))}>Remove</Button>
        </Card>
    )
}   

export default Item;