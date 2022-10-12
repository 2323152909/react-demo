import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/index';
import '@/styles/index.less';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes />
  </Router>
);
