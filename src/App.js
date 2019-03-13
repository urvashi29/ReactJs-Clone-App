import React, { Component } from 'react';
import Navigate from './allpages/Navigation';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import './App.css';
import Course from './allpages/Course';
import Profile from './allpages/Profile';
import Settings from './allpages/Setting';
import Drives from './allpages/Drives';
import Dashboard from './allpages/Dashboard';
class App extends Component {
  state = {
    courses: [
      { name: 'Acadview', modules: 5, test: 43, startDate: 'Sep 5, 2018', EndDate: 'May 31, 2018', Status: 'Active' },
      { name: 'Java', modules: 3, test: 2, startDate: 'Feb 20,2019', EndDate: 'June 30,2019', Status: 'Active' },
      { name: 'Data Structure', modules: 2, test: 4, startDate: 'May 31, 2018 3', EndDate: 'June 30, 2019', Status: 'Not Active' },
      { name: 'Python', modules: 2, test: 7, startDate: 'May 31, 2018', EndDate: 'May 31, 2018', Status: 'Not Active' }
    ]
  }
  SearchCourse = (it) => {
    let item = it.toUpperCase()
    let match = this.state.courses.filter(x => x.name.includes(item));
    console.log(match)
    if (match === this.state.name) {
      this.courses.style.display = 'block';
    }
    // else {
    //   this.courses.style.display = 'none';
    // }
    console.log(match)
  }
  render() {
    return (
      // doubt
      //render={(props)=><Course {...props}}//to pass props
      <BrowserRouter>
        <div>
          {/* Here exact path will initially open my page with courses */}
          <Login />
          <Route path='/login' component={Login} />
          <Navigate /> */}
          {/* courses=>this.state.courses
          {/* DOUBT path to first webpage */}
          <Route exact path='/first' component={Settings} />
          <Route path='/courses' render={(courses) => <Course courses={this.state.courses} SearchCourse={this.SearchCourse} />} />
          <Route path='/profile' component={Profile} />
          <Route path='/settings' component={Settings} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/drives' component={Drives} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
