import React from 'react'
import Card from 'react-bootstrap/Card';
import { useDraggable } from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities'

function Item (props) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id,
    });

    const style = transform ? {
        transform: CSS.Transform.toString(transform)
    } : undefined;

    return (
        <Card body style={style} ref={setNodeRef} {...attributes} {...listeners}>
            {props.text}
        </Card>
    )
}   

export default Item;