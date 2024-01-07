import { css } from 'styled-components';

export const SlideFwdCenter = css`
  animation: slide-fwd-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes slide-fwd-center {
    0% {
    }
    100% {
      background: #fff;
    }
  }
`;
