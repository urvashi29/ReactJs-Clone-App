import React, { Component } from 'react'
// import './course.css';
class Course extends Component {
    //     render() {
    //         return (
    //             <div className='container center'>
    //                 <h1>Choclates</h1>
    //             </div>
    //         )
    //     }
    // }


    handleSubmit = (e) => {
        e.preventDefault();
    }
    handleKeyPress = (e) => {
        this.props.searchCourse(e.target.value)
        console.log(e.target.value)
    }
    render() {
        console.log(this.props);
        let courses = this.props.courses;
        console.log('after destructing', courses);
        const courseList = courses.map(info => {
            return (
                <tr>
                    <td>{info.name}</td>
                    <td>{info.modules}</td>
                    <td>{info.test}</td>
                    <td>{info.startDate}</td>
                    <td>{info.EndDate}</td>
                    <td>{info.Status}</td>
                </tr>
            )
        });
        // const course = courses.length
        // console.log(course)
        return (
            <div>
                <header>
                    {/* <a href=""> */}
                    <img src={require('./home.jpg')} alt='home' />
                    {/* </a> */}
                    <span>&#62;  Courses</span>
                </header>
                <div className="third">
                    {/* <p>My Courses ({this.course})</p> */}
                    <p>My Courses (4)</p>
                    <form className="formDiv" onSubmit={this.handleSubmit}>
                        <input type="text" onKeyPress={this.handleKeyPress} placeholder="Enter Course name to Search"></input>
                        <button><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <div className="Table">
                    <table>
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
                            <td><img src={require('./setting1.png')} alt='setting' /></td>
                        </tr>
                        <tr>
                            <th>Course Name</th>
                            <th>No. of Modules</th>
                            <th>No. of Test</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                        </tr>
                        {courseList}
                    </table>
                </div>
            </div>
        )
    }
}
export default Course;