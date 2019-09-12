import React from 'react';
import { GlobalStyle } from './style';
import Header from './common/header/index';
import { GlobalStyleIconfont } from './statics/iconfont/iconfont';


function App() {
  return (
    <div className="color1">
        <GlobalStyle blueColor/>
        <GlobalStyleIconfont />
        <Header>
        </Header>
    </div>
  );
}

export default App;
