import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/Navbar.component';
import Index from './components/index/Index.component';
import Lyrics from './components/lyrics/Lyrics.component';

import { Provider } from './context'

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path='/lyrics/track/:id' component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
