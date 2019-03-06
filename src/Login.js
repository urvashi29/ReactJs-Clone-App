
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './Login.css';
class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.props)
        //DOUBT how to redirect to next page
        // this.props.history.location('/first')
        // this.props.history.redirect('/first')

    }
    render() {
        return (
            <div className="flex-container">
                <div className="firstDiv">
                    <img src={require('./chitkara-logo.png')} className="logo" alt=" " />
                    <form onSubmit={this.handleSubmit}>
                        <h2 className="login-text">Login</h2>
                        <p className="text">Email Address</p>
                        <input id="input-text" type="email" placeholder="Email" className='validate' />
                        <p className="text">Password</p>
                        <input id="input-field" placeholder="Password" type="password" />
                        <p className="text">Forget Password?<span className="text-link">Get Activation Link</span></p>
                        <button className="login-button">Login</button>
                    </form>
                </div>
                <img className="image" src={require('./logo.png')} alt="hc" />
            </div>
        );
    }
}
export default withRouter(Login);

