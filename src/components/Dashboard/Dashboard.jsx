import React from 'react'
import Column from './Column'
import '../../static/css/Dashboard.css'

const Dashboard = (props) => {
    return (
        <div className="dashboard-container">
            <h1>{props.title}</h1>
            <hr />
            <div className='block'>
                <Column title="Upcoming" />
                <Column title="In progress" />
                <Column title="For review" />
                <Column title="Done" />
            </div>
        </div>
    )
}

export default Dashboard;