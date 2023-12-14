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

export const CardInfoContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
  margin: 3rem 0 0;
`;

export const AuthorAvatar = styled.a`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* filter: grayscale(100%); */
    display: block;
    overflow: hidden;
    margin: 1rem 10px;
  }
`;

export const HalfCircle = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 48px;
  fill: none;
  stroke: #ff8a00;
  stroke-width: 8;
  stroke-linecap: round;
  pointer-events: none;
`;

export const AuthorName = styled.div`
  .author-name-prefix {
    font-style: normal;
    font-weight: 700;
    color: #7a7a8c;
  }
`;
