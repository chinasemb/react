import {
  createGlobalStyle
} from 'styled-components'

export const GlobalStyleIconfont = createGlobalStyle `@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1567577252007'); /* IE9 */
  src: url('./iconfont.eot?t=1567577252007#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1567577252007') format('woff'),
  url('./iconfont.ttf?t=1567577252007') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1567577252007#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconspinner1:before {
  content: "\ed2a";
}

.iconspinner:before {
  content: "\e601";
}

.iconfangdajing:before {
  content: "\e615";
}

.iconqianbi:before {
  content: "\e60f";
}

.iconyumaobi:before {
  content: "\e600";
}

.iconyumao:before {
  content: "\e6b0";
}



`