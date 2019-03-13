import React from 'react';
import './setting.css'
const Settings = () => {
    return (
        <div className="page">
            <header>
                <img src={require('./home.jpg')} alt='home' />
                <span>&#62; Settings &#62; Users</span>
            </header>
            <div className='wrapper'>
                <p>Basic Information</p>
                <img src={require('./images.jpg')} alt='profile' />
                <form className='wrapper'>
                    <label>First Name *</label>
                    <input placeholder="urvashi"></input>
                    <label> Last Name *</label>
                    <input placeholder="singla"></input>
                    <label>Gender *</label>
                    <input ></input>
                    <label>Email *</label>
                    <input placeholder="urvashi1925.cse16@chitkara.edu.in" disabled></input>
                    <label>Mobile Number *</label>
                    <input placeholder="7009454505" ></input>
                    <span>Change Passoword</span>
                    <label>Current Password*</label>
                    <input placeholder="Current Password"></input>

                    <label>New Password *</label>
                    <input placeholder="New Password"></input>

                    <button type='button' class='btn btn-secondary'>Update</button>
                </form>
            </div>
        </div >
    )
}
export default Settings;