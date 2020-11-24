import {css} from "@emotion/core";

export const bootstrapOverrides = css`
// Custom rounding selectors for buttons.
.btn {
  &.rounded-0 {
    border-radius: 0;
  }
  &.rounded-bl {
    border-bottom-left-radius: 0.25rem !important;
  }
  &.rounded-br {
    border-bottom-right-radius: 0.25rem !important;
  }
  &.rounded-tl {
    border-top-left-radius: 0.25rem !important;
  }
  &.rounded-tr {
    border-top-right-radius: 0.25rem !important;
  }
}

.footer {
  color: #f3f3f3;
  font-size: 12px;
  font-family: serif;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #282c34;
  text-align: center;
}
`;
