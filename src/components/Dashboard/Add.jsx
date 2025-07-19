import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/reducers/dashboardReducer';

const Add = (props) => {

    const [value, setValue] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    function columnSelect(event) {
        setValue(event.target.value);
    }

    const info = {
        task: name,
        status: value,
        dashboardId: props.dashboardId,
    }

    return (
        <div>
            <input 
                placeholder='Task' 
                value={name}
                onChange={el => setName(el.target.value)}
            />
            <select onChange={columnSelect}>
                {
                    props.columns.map(el => <option key={el.id} value={el.id}>{el.title}</option>)
                }
            </select>
            <button onClick={() => dispatch(addTask(info))}>Add</button>
        </div>
    )
}

export default Add;