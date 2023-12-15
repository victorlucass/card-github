import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 30px 0;
`;

export const HeaderContent = styled.div`
  display: flex;
`;

export const HeaderInput = styled.input`
  border-radius: 6px 0 0 6px;
  border: 0;
  background: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  border-right: 1px solid ${(props) => props.theme.primary};

  &::placeholder {
    color: ${(props) => props.theme.primary};
  }
`;

export const HeaderButton = styled.button`
  display: block;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.text};
  border-radius: 0 6px 6px 0;
  border: 1px solid transparent;
  padding: 0 1rem;
  transition: 0.3s;

  &:hover {
    border: 1px solid ${(props) => props.theme.primary};
    cursor: pointer;
  }
`;
