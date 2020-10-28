import React from 'react';

class RegisterForm extends React.Component {
    constructor() {
        super()
        this.state = {
            nombre: '',
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
            this.props.onRegisterUser(this.state);
        };
    }

    render() {
        return (
            <div className="card mx-auto mt-4">
                <div className="card-header">
                    <h3>Si todavía no tenés tu Kanban, registrate!</h3>
                </div>
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <input
                                    type="text"
                                    name="nombre"
                                    value={this.state.nombre}
                                    className="form-control"
                                    placeholder="Tu nombre"
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>
                            <div className="col">
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
                        </div>
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
                        Registrarme
                    </button>
                </form>
            </div>

        )
    }

}

export default RegisterForm;