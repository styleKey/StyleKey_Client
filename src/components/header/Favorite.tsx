import FavoriteButtonLogo from './images/FavoriteButton.svg';
import * as Fa from './styles/HeaderButtons.styles';

function Favorite() {
  return (
    <Fa.HeaderButtons>
      <img src={FavoriteButtonLogo} alt="Favorite Button" />
    </Fa.HeaderButtons>
  );
}

export default Favorite;
