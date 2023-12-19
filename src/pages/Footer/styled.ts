import styled from "styled-components";

export const AuthorExtras = styled.div`
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 1.5rem;
  span {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  span + span::before {
    content: "|";
    color: ${(props) => props.theme.stroke};
    font-size: 1rem;
    font-weight: bolder;

  }

`;

export const NoneContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  svg {
    max-width: 100%;
    height: 300px;
  }
`;
export const CreditsContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;
