import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import Header from './common/header/index';
import { GlobalStyleIconfont } from './statics/iconfont/iconfont';
import store from './store'


function App() {
  return (
    <Provider store={store}>
        <GlobalStyle blueColor/>
        <GlobalStyleIconfont />
        <Header>
        </Header>
    </Provider>
  );
}

export default App;
