import HamburgerButtonLogo from './images/Hamburgerbutton.svg';
import { Styled } from './styles/Hamburger.styles';

function Hamburger() {
  return (
    <Styled.HamburgerButton>
      <img src={HamburgerButtonLogo} alt="Hamburger Button" />
    </Styled.HamburgerButton>
  );
}

export default Hamburger;
