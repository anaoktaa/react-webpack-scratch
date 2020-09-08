import React from 'react';
import { Layout } from 'antd';

import 'antd/dist/antd.less';
import './ant-design.styles.css';

import CustomDrawer from './components/custom-drawer/custom-drawer.component';
import CustomHeader from './components/custom-header/custom-header.component';

const App = () => (
  <div className='app'>
    <Layout style={{ minHeight: '100vh' }}>
      <CustomDrawer />
      <CustomHeader/>
    </Layout>
  </div>
);

export default App;