import React from 'react'
import Item from './Item'
import '../../static/css/Main.css'
import { useSelector } from 'react-redux'
import { selectDashboard } from '../../redux/reducers/dashboardReducer'
import Add from './Add'

const Main = () => {
    const dashboard = useSelector(selectDashboard);

    return (
        <div className='main-container'>
            <h1>Your dashboards</h1>
            <hr />
            <div className='item-container'>
                {
                    dashboard.dashboards.map(el => <Item id={el.id} title={el.name} text={el.description} amount={el.tasks != [] ? el.tasks.length : '0'}/>)
                }
            </div>
            <Add></Add>
        </div>
    )
}

export default Main;