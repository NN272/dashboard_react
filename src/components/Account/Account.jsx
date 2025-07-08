import React from 'react'
import Item from './Item';
import '../../static/css/Account.css'

const Account = (props) => {
    return (
        <div className='account-container'>
            <h1>Your account</h1>
            <hr />
            <div className='account-block'>
                <div className='img'></div>
                <div>
                    <Item item="John" />
                    <Item item="3 dashboards" />
                    <Item item="example@mail.com" />
                    <Item item="+123456789" />
                </div>
            </div>
        </div>
    )
}

export default Account;