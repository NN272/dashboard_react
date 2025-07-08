import React from 'react'
import Item from './Item'

const Column = (props) => {
    return (
        <div className='column-container'>
            <h3>{props.title}</h3>
            <hr />
            <Item text="example" />
            <Item text="example" />
        </div>
    )
}

export default Column;