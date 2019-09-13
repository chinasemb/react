import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
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
        <BrowserRouter>
          <Route path='/' exact render={()=><div>home</div>}></Route>
          <Route path='/detail' exact render={()=><div>detail</div>}></Route>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
