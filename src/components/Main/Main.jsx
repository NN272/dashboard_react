import React from 'react'
import Item from './Item'
import '../../static/css/Main.css'

const Main = () => {
    return (
        <div className='main-container'>
            <h1>Your dashboards</h1>
            <hr />
            <div className='item-container'>
                <Item title="My Dashboard" text="Test Dashboard"/>
                <Item title="My Dashboard" text="Test Dashboard"/>
                <Item title="My Dashboard" text="Test Dashboard"/>
            </div>
        </div>
    )
}

export default Main;