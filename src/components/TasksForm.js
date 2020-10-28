import React from 'react';

class TasksForm extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            priority: 'baja',
            description: '',
            responsible: ''
        };

        this.handleInputChange = (e)=>{
            const {value, name} = e.target
            this.setState({
                [name]: value
            })
        };

        this.handleSubmit = (e) => {
            e.preventDefault();
            this.props.onAddTask(this.state);
            
              console.log(this.state)
        }

    }

    render() {
        return (
            <div className="card h-75 mx-auto mt-4">
                <div className="card-header">
                    <h3>Agregar una tarea</h3>
                </div>
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={this.state.title}
                            placeholder="Título"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="priority"
                            className="form-control"
                            value={this.state.priority}
                            onChange={this.handleInputChange}
                        >
                            <option>baja</option>
                            <option>media</option>
                            <option>alta</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <textarea
                            type="textarea"
                            name="description"
                            className="form-control"
                            value={this.state.description}
                            placeholder="Descripción"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            className="form-control"
                            value={this.state.responsible}
                            placeholder="Responsable"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Agregar
                    </button>
                </form>
            </div>
        )
    }
}

export default TasksForm