import React from 'react';
import './Kanban.css';

import { tasks } from "../tasks.json";
import TasksForm from "./TasksForm";

class Kanban extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks
    };

    this.handleAddTask = (task)=>{
      this.setState({
        tasks: [...this.state.tasks, task]
      });
    };

    this.removeTask = (index) => {
      if(window.confirm('¿Estás seguro de querer eliminar la tarea?')){
        this.setState({
          tasks: this.state.tasks.filter((e, i) => {
            return i !== index
          })
        })
      }
    }
  }
  render() {

    const todos = this.state.tasks.map((task, i) => {
      var color = "bg-light"
      switch (task.priority) {
        case "baja":
          color = "bg-success"
          break;
        case "media":
          color = "bg-warning"
          break;
        case "alta":
          color = "bg-danger"
          break;
        default:
          break;
      }
      return (
        <div className="col-lg-4" key={i}>
          <div className="card mx-2 mt-4">
            <div className="card-header">
              <h3>{task.title}</h3>
              <span className={`badge badge-pill py-2 ${color}`} >{task.priority}</span>
            </div>
            <div className="card-body">
              <p>{task.description}</p>
              <p><em>{task.responsible}</em></p>
            </div>
            <div className="card-footer">
              <button
              className="btn btn-danger"
              onClick={this.removeTask.bind(this, i)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-light">
          <h5 className="text-dark align-middle">
            Tareas - {this.state.tasks.length}
          </h5>
        </nav>
        <div className="container">
          <div className="row mt-5">
            <TasksForm className="col" onAddTask={this.handleAddTask}/>
            <div className="container col mx-4
            ">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }

}

export default Kanban;
