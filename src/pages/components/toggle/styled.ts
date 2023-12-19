import { styled } from "styled-components";

export const ToggleContainer = styled.label`
  display: grid;
  grid-template-columns: auto auto;
  gap: 2em;
  align-items: center;
  .label-text {
    font-weight: bolder;
    font-size: 2rem;
  }

  .switch-wrap {
    cursor: pointer;
    background: #15273b;
    padding: 4px;
    width: 60px;
    height: 32px;
    border-radius: 10px;
    input {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }
  }
  .switch {
    height: 100%;
    display: grid;
    grid-template-columns: 0fr 1fr 1fr;
    transition: 0.2s;
    &::after {
      content: "";
      border-radius: 65%;
      background: ${({theme}) => theme.primary};
      grid-column: 2;
      transition: background 0.2s;
    }
  }
  input:checked {
    + .switch {
      grid-template-columns: 1fr 1fr 0fr;
      &::after {
        background-color: ${({ theme }) => theme.secondary};
      }
    }
  }
`;
