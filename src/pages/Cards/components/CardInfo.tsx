import {
  AuthorAvatar,
  AuthorName,
  CardInfoContainer,
  HalfCircle,
} from "../styles";

export function CardInfo() {
  return (
    <CardInfoContainer>
      <AuthorAvatar>
        <img src="https://github.com/victorlucass.png" alt="avatar" />
      </AuthorAvatar>
      <HalfCircle viewBox="0 0 106 57">
        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
      </HalfCircle>
      <AuthorName>
        <div className="author-name-prefix">Author</div>
        Jeff Delaney
      </AuthorName>
    </CardInfoContainer>
  );
}
