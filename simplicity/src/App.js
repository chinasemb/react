import React from 'react';
import { GlobalStyle } from './style';
import { Provider } from 'react-redux';
import { GlobalStyleIconfont } from './static/iconfont/iconfont';
import  Header  from './common/header';
import  store  from './store';
import  { BrowserRouter, Route }  from 'react-router-dom';
import  Home  from './pages/home';
import  Detail  from './pages/detail/loadable.js';
import  Login  from './pages/login/loadable.js';
import  Write  from './pages/write/loadable.js';


function App() {
  return (
    <Provider store={store}>
        <GlobalStyle/>
        <GlobalStyleIconfont/>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home} ></Route>
            <Route path='/login' exact component={Login} ></Route>
            <Route path='/detail/:id' exact component={Detail} ></Route>
            <Route path='/write' exact component={Write} ></Route>
          </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
