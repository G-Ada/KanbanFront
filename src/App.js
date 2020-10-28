import React from 'react';
import Kanban from './components/Kanban';
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                <Route path="/ingresar" component={Login} />
                <Route path="/" exact component={Kanban} />
                </Switch>
            </div>
        </Router>
    )
}

export default App