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
            <div className='aside-content'>
                <aside>
                    <div>
                        <NavLink to='/dashboard' title='Dashboard'>
                            <img src={require('./dashboard.png')} alt='dashboard' />
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/profile' title='Profile'>
                            <img src={require('./profile.png')} alt='profile' />
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/courses' title='Courses'>
                            <img src={require('./courses.jpg')} alt='courses' />
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/drives' title='Drives'>
                            <img src={require('./drives.jpg')} alt='drivers' />
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/settings' title='Settings'>
                            <img src={require('./setting1.png')} alt='settings' />
                        </NavLink>
                    </div>
                </aside>
            </div>
        </div>
    )
}
export default Navigate;