import React from 'react'
import Column from './Column'
import '../../static/css/Dashboard.css'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { selectDashboard, setNewStatus } from '../../redux/reducers/dashboardReducer'
import { useState } from 'react'
import { DragEndEvent, DndContext } from '@dnd-kit/core'
import { selectColumn } from '../../redux/reducers/columnReducer'
import { useDispatch } from 'react-redux'
import Add from './Add'

const Dashboard = (props) => {
    let id = useParams();
    const dashboard = useSelector(selectDashboard);
    const column = useSelector(selectColumn);
    const dispatch = useDispatch();

    const [tasks, setTasks] = useState(dashboard.dashboards[id.id].tasks);

    function handleDragEnd(DragEndEvent) {
        const event = DragEndEvent;
        const {active, over} = event;

        if (!over) return;
        const taskId = active.id;
        const newStatus = over.id;

        setTasks(() => tasks.map(task => task.id === taskId ? {
            ...task,
            status: newStatus
        } : task))

        dispatch(setNewStatus({
            id: taskId,
            status: newStatus,
            dashboardId: [id.id]
        }));
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
        <div className="dashboard-container">
            <h1>{dashboard.dashboards[id.id].name}</h1>
            <hr />
            <div className='block'>
                {
                    column.columns.map(el => <Column title={el.title} key={el.id} id={el.id} tasks={tasks.filter(task => task.status == el.id)} />)
                }
            </div>
            <Add columns={column.columns} dashboardId={id.id} />
        </div>
        </DndContext>
    )
}


export default Dashboard;