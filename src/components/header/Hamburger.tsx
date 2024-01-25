import HamburgerButtonLogo from './images/Hamburgerbutton.svg';
import * as Ha from './styles/HeaderButtons.styles';

function Hamburger() {
  return (
    <Ha.HeaderButtons>
      <img src={HamburgerButtonLogo} alt="Hamburger Button" />
    </Ha.HeaderButtons>
  );
}

export default Hamburger;
