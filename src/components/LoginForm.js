import React from 'react';

class LoginForm extends React.Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            clave: ''
        }

        this.handleInputChange = (e)=>{
            const {value, name} = e.target
            this.setState({
                [name]: value
            })
        };

        this.handleSubmit = (e) => {
            e.preventDefault();
            this.props.onLogIn(this.state);
        };
    }

    render(){
        return (
            <div className="card mx-auto mt-4">
                <div className="card-header">
                    <h3>Si ya sos usuario, ingresá!</h3>
                </div>
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <input
                            type="text"
                            name="userName"
                            value={this.state.userName}
                            className="form-control"
                            placeholder="Usuario"
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="clave"
                            value={this.state.clave}
                            className="form-control"
                            placeholder="Contraseña"
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success py-2">
                        Ingresar
                    </button>
                </form>
            </div>

        )
    }

}

export default LoginForm;