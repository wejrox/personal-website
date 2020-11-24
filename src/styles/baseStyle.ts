import {css} from "@emotion/core";

export const baseStyle = css`
body {
  position: relative;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw !important;
  overflow-x: hidden;
  min-height: 100%;
  padding-bottom: 6rem;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}
html {
  height: 100%;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
`;
