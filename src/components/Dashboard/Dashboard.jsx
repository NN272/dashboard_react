import React from 'react'
import Column from './Column'
import '../../static/css/Dashboard.css'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { selectDashboard } from '../../redux/reducers/dashboardReducer'

const Dashboard = (props) => {
    let id = useParams();
    const dashboard = useSelector(selectDashboard);

    return (
        <div className="dashboard-container">
            <h1>{dashboard.dashboards[id.id].name}</h1>
            <hr />
            <div className='block'>
                <Column title="Upcoming" tasks={dashboard.dashboards[id.id].tasks}/>
                <Column title="In progress" tasks={dashboard.dashboards[id.id].tasks}/>
                <Column title="For review" tasks={dashboard.dashboards[id.id].tasks}/>
                <Column title="Done" tasks={dashboard.dashboards[id.id].tasks} />
            </div>
        </div>
    )
}

export default Dashboard;