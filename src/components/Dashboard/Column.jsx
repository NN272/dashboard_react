import React from 'react'
import Item from './Item'

const Column = (props) => {
    let array = [];

    for(let i = 0;i < props.tasks.length;i+=1) {
        if(props.tasks[i].status == props.title) {
            array.push(props.tasks[i]);
        }
    }

    console.log(array);

    return (
        <div className='column-container'>
            <h3>{props.title}</h3>
            <hr />
            {array.map(el => <Item text={el.task}/>)}
        </div>
    )
}

export default Column;