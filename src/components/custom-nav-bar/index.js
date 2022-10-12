import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.less';

const Index = (props) => {
  const { title = '导航栏' } = props;

  const history = useHistory();

  return (
    <div className='custom-nav-bar'>
      <div className='left' onClick={() => history.goBack()}>
        {'<'}
      </div>
      <div className='center'>{title}</div>
      <div className='right'></div>
    </div>
  );
};

export default Index;
