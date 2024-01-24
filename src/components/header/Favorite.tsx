import FavoriteButtonLogo from './images/FavoriteButton.svg';
import { Styled } from './styles/Favorite.styles';

function Favorite() {
  return (
    <Styled.FavoriteButton>
      <img src={FavoriteButtonLogo} alt="Favorite Button" />
    </Styled.FavoriteButton>
  );
}

export default Favorite;
