import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './scss/style.scss';
import FarmersRoutes from './components/farmers/FarmersRoutes';
import Login from './components/auth/Login';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <h1>WDI Project 4</h1>
          <Route path="/login" component={Login} />
          <FarmersRoutes />
        </div>
      </Router>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
