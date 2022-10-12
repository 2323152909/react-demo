import React from 'react';
import { Button } from 'antd';
import CustomNavBar from '@/components/custom-nav-bar';

import './index.less';
import { useHistory } from 'react-router-dom';

const Index = () => {
  const history = useHistory();
  return (
    <div className='cate'>
      <CustomNavBar title='分类' />
      <Button
        type='dashed'
        style={{ marginTop: '100px' }}
        onClick={() => history.push('/m-sns/about')}
      >
        关于
      </Button>
    </div>
  );
};

export default Index;
