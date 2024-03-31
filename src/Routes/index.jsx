import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routesHelper';

import PageWrapper from './PageWrapper';

export default function Routes() {
  const allTheRoutes = [];
  for (let path in routes) {
    allTheRoutes.push(
      <Route
        key={path}
        path={path}
        exact
        component={() => <PageWrapper route={routes[path]} />}
      />
    );
  }
  return (
    <Router>
      <Switch>{allTheRoutes}</Switch>
    </Router>
  );
}
