import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import Api from '../api/Api';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
    constructor() {
        super()
        this.handleRegisterUser = this.handleRegisterUser.bind(this)
        this.handleLogIn = this.handleLogIn.bind(this)
        this.state = {
            error: false,
            message: "",
            redirect: false
        }
    }

    async handleRegisterUser(user) {
        let register = await Api.registerUser(user)
        let status = register.status
        let message = register.message
        if (status == 400) {
            this.setState({ error: true, message: message })
        } else if (status == 500) {
            this.setState({ error: true, message: 'Hubo un error, vuelve a intentarlo' })
        }
        else {
            // let newUser = {userName: user.userName, clave: user.clave}
            // console.log(newUser)
            // let login = await Api.loginUser(newUser)
            this.setState({redirect: true})
        }
    }

    async handleLogIn(user) {
        let login = await Api.loginUser(user)
        let status = login.status
        let message = login.message
        if (status == 401) {
            this.setState({ error: true, message: message })
        } else if (status == 500) {
            this.setState({ error: true, message: 'Hubo un error, vuelve a intentarlo' })
        }
        console.log(login)
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
      }

    render() {
        return (
            <div>
                {this.state.error && <div className="alert alert-danger" role="alert">{this.state.message}</div>}
                <div className="container">
                    
                    <div className="row">
                        <RegisterForm className="col" onRegisterUser={this.handleRegisterUser} />
                        <LoginForm className="col" onLogIn={this.handleLogIn} />
                    </div>
                </div>
                {this.renderRedirect()}
            </div>
        )

    }
}


export default Login