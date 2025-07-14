import React from 'react';
import { NavLink } from 'react-router';

const Item = (props) => {
    return (
        <NavLink to={props.path}>
          <div>
            {props.text}
          </div>  
        </NavLink>
    )
}

export default Item;