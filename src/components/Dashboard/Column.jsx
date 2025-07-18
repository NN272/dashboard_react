import React from 'react'
import Item from './Item'
import { useDroppable } from '@dnd-kit/core';

const Column = (props) => {
    const {setNodeRef} = useDroppable({
        id: props.id
    });

    return (
        <div className='column-container'>
            <h3>{props.title}</h3>
            <hr />
            <div ref={setNodeRef} style={{height: "500px"}}>
                {props.tasks.map(el => <Item text={el.task} key={el.id} id={el.id} />)}
            </div>
        </div>
    )
}

export default Column;