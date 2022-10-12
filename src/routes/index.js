import React, { Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
const Index = React.lazy(() => import('../containers/index'));
const Home = React.lazy(() => import('../containers/home/index'));
const Cate = React.lazy(() => import('../containers/cate/index'));
const About = React.lazy(() => import('../containers/about/index'));

// import Index from '../containers';
// import Home from '../containers/home';
// import Cate from '../containers/cate';
// import About from '../containers/about';

const Routes = () => {
  const location = useLocation();
  return (
    <Index>
      <Suspense fallback={<div>loading...</div>}>
        <Switch location={location}>
          <Route path='/m-sns'>
            <Route path='/m-sns/home' component={Home}></Route>
            <Route path='/m-sns/cate' component={Cate}></Route>
            <Route path='/m-sns/about' component={About}></Route>
          </Route>
        </Switch>
      </Suspense>
    </Index>
  );
};

export default Routes;
