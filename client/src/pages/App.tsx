import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';

import './App.scss';

const App: React.FC = () => {
  return (
    <section className="app">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </section>
  );
}

export default App;
