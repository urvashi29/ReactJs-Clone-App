import React from 'react'
import './course.css'
const Drives = () => {
    return (
        <div>
            <header>
                <img src={require('./home.jpg')} alt='home' />
                <span>&#62;  Courses</span>
            </header>
            <div className="third">
                {/* <p>My Courses ({this.course})</p> */}
                <p>Drives (0)</p>
                <form className="formDiv">
                    <input type="text" placeholder="Enter Course name to Search"></input>
                    <button className="fa fa-search"></button>
                </form>
            </div>
            <div className="Table">
                <table>
                    <thead>
                        <tr className="drop-down">
                            <td>
                                <select>
                                    <option value='10'>10</option>
                                    <option value='20'>20</option>
                                    <option value='30'>30</option>
                                    <option value='40'>40</option>
                                </select>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><img src={require('./setting1.png')} alt='setting' /></td>
                        </tr>
                    </thead>
                    <tr>
                        <th>Drive Name ▲▼</th>
                        <th>Profiles ▲▼</th>
                        <th>Location ▲▼</th>
                        <th>Job Type ▲▼</th>
                        <th>Salary ▲▼</th>
                        <th>Status ▲▼</th>
                        <th>Placement Date ▲▼</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>No record Found</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Drives;