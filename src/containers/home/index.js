import React from 'react';
import { Button } from 'antd';
import CustomNavBar from '@/components/custom-nav-bar';

import './index.less';
import { useHistory } from 'react-router-dom';

const Index = () => {
  const history = useHistory();
  return (
    <div className='home'>
      <CustomNavBar title='首页' />
      <Button
        type='primary'
        style={{ marginTop: '100px' }}
        onClick={() => history.push('/m-sns/cate')}
      >
        分类
      </Button>
    </div>
  );
};

export default Index;
