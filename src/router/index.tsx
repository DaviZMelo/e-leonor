import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import routes from './config';
import { Styles } from '../styles/styles';

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {routes.map(routeItem => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
