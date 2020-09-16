import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Layout } from 'antd';

import 'antd/dist/antd.less';
import './ant-design.styles.css';

import { selectFoldDrawer } from './redux/application/application.selectors';

import CustomDrawer from './components/custom-drawer/custom-drawer.component';
import CustomHeader from './components/custom-header/custom-header.component';

const { Content } = Layout;

const App = ({ foldDrawer }) => {

  return (
    <div className='app'>
      <Layout style={{ minHeight: '100vh' }}>
          <CustomDrawer/>
          <Layout className="site-layout">
            <CustomHeader/>
            <Content className={`content-container ${foldDrawer? 'content-fold-close': 'content-fold-open'}`}>
              <div className="app-site-container">
                <h1>INI COUNTER BERJALA</h1>
              </div>
            </Content>
          </Layout>
      </Layout>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  foldDrawer: selectFoldDrawer
});

export default connect(mapStateToProps)(App);