import styled from "styled-components";

export const CardList = styled.section<{ icon: string }>`
  display: flex;
  padding: 3rem;
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::after {
    content: "${(props) => props.icon}";
    position: sticky;
    top: 30px;
    right: 30px;
    color: ${(props) => props.theme.secondary};
    animation: seta 0.5s ease-in 0s infinite alternate;
    font-size: 1.75rem;
    margin-top: -2rem;
  }

  /* ---------------------------- */
  & {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft 0.3s forwards;
  }

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  @keyframes seta {
    from {
      right: 30px;
    }

    to {
      right: 20px;
    }
  }

  /* ---------------------------- */

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    /*    Estilo do scroll, background e borda*/
    background: #201c29;
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.backgroundLinearGradient};
  }
`;

export const CardContent = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  min-height: 350px;
  min-width: 400px;
  max-width: 100%;
  max-height: 100%;
  padding: 1.5rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: 0.2s ease;

  /* ---------------------------- */

  &:hover {
    transform: translateY(-1rem) rotate(3deg);
  }

  &:hover ~ & {
    transform: translateX(130px);
  }

  &:not(:first-child) {
    margin-left: -130px;
  }
`;

export const CardMainStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2:hover {
    cursor: pointer;
    background: ${(props) => props.theme.backgroundH2};
    text-shadow: none;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const CardMainDescription = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.stroke};
  overflow: hidden;
`;

export const CardMainBranch = styled(CardMainDescription)`
  span {
    background: ${(props) => props.theme.backgroundH2};
    text-shadow: none;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const CardMainForks = styled(CardMainDescription)``;

export const CardMainLanguage = styled(CardMainDescription)``;

export const CardMainLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.stroke};
`;

export const CardInfoContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
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
  stroke: ${(props) => props.theme.stroke};
  stroke-width: 8;
  stroke-linecap: round;
  pointer-events: none;
`;

export const AuthorNamePrefix = styled.div`
  font-style: normal;
  font-weight: 700;
  color: ${(props) => props.theme.secondary};
`;
