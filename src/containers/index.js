import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.less';

const Index = (props) => {
  const location = useLocation();
  const history = useHistory();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames={history.action === 'PUSH' ? 'fade-left' : 'fade-right'}
        timeout={300}
      >
        {props.children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Index;
