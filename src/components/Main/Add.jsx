import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addDashboard } from '../../redux/reducers/dashboardReducer';

const Add = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    let props = {
        name: name,
        description: description
    }

    return (
        <>
            <input 
                placeholder='name' 
                value={name}
                onChange={el => setName(el.target.value)}
            />
            <input 
                placeholder='description' 
                value={description}
                onChange={el => setDescription(el.target.value)}
            />
            <button onClick={() => dispatch(addDashboard(props))}>Add</button>
        </>
    )
}

export default Add;