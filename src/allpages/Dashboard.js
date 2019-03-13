import React from 'react';
import './setting.css'
const Dashboard = () => {
    return (
        <div className='page-class'>
            <header>
                <img src={require('./home.jpg')} alt='home' />
                <span>&#62;  Dashboard</span>
            </header>
        </div>
    )
}
export default Dashboard;