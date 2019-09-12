import {
  createGlobalStyle
} from 'styled-components'

export const GlobalStyleIconfont = createGlobalStyle `
  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1568259405005'); /* IE9 */
  src: url('./iconfont.eot?t=1568259405005#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1568259405005') format('woff'),
  url('./iconfont.ttf?t=1568259405005') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1568259405005#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

