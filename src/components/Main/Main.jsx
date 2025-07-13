import React from 'react'
import Item from './Item'
import '../../static/css/Main.css'
import { useSelector } from 'react-redux'
import { selectDashboard } from '../../redux/reducers/dashboardReducer'

const Main = () => {
    const dashboard = useSelector(selectDashboard);
    console.log(dashboard);

    return (
        <div className='main-container'>
            <h1>Your dashboards</h1>
            <hr />
            <div className='item-container'>
                <Item title={dashboard.name} text={dashboard.description} amount={dashboard.tasks.length}/>
            </div>
        </div>
    )
}

export default Main;