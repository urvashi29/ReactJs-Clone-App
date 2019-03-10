import React from 'react';
import './course.css'
import { Link, NavLink } from 'react-router-dom';
const Navigate = () => {
    return (
        <div>
            <div className="first">
                <div className="hamburger"></div>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
                <div className="second">
                    <img src={require('./download.jpg')} alt='download' />
                    <span>Urvashi Singla</span>
                </div>
            </div>
            <aside>
                <NavLink to='/dashboard' title='Dashboard'>
                    <img src={require('./dashboard.png')} alt='dashboard' />
                </NavLink>
                <NavLink to='/profile' title='Profile'>
                    <img src={require('./profile.png')} alt='profile' />
                </NavLink>
                <NavLink to='/courses' title='Courses'>
                    <img src={require('./courses.jpg')} alt='courses' />
                </NavLink>
                <Link to='/drives' title='Drives'>
                    <img src={require('./drives.jpg')} alt='drivers' />
                </Link>
                <NavLink to='/settings' title='Settings'>
                    <img src={require('./setting1.png')} alt='settings' />
                </NavLink>
            </aside>
        </div>
    )
}
export default Navigate;