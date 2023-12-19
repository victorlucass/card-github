import styled from "styled-components";

export const LoaderStyle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(${({ theme }) => theme.primary} 10%, ${({ theme }) => theme.stroke} 0 90%);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: s3 1s infinite linear;

  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`;
