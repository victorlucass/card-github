import styled from "styled-components";

export const CardList = styled.section`
  display: flex;
  padding: 3rem;
  overflow-x: scroll;
`;

export const CardContent = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 350px;
  width: 400px;
  max-width: 400px;
  min-width: 250px;
  padding: 1.5rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: 0.2s ease;
`;

export const CardHeaderStyle = styled.header`
  h2:hover {
    cursor: pointer;
    background: ${(props) => props.theme.backgroundH2};
    text-shadow: none;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
