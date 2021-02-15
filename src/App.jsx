import React from 'react';
import Landing from './components/routes/landing';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import AppLayout from './components/layouts/App/AppLayout';
import MovieDetails from './components/routes/movie-details';

const App = () => (
  <Router>
    <Switch>
      <AppLayout>
        <Route exact path="/" component={Landing} />
        <Route exact path="/movie_details/:id" component={MovieDetails} />
        <Route component={() => <Redirect to="/" />} />
      </AppLayout>
    </Switch>
  </Router>
)
export default App;
