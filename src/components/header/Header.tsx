import Hamburger from './Hamburger.tsx';
import Favorite from './Favorite.tsx';
import Login from './Login.tsx';
import Logo from './Logo.tsx';
import * as He from './styles/Header.styles.tsx';

function Header() {
  return (
    <He.NavBar>
      <He.LeftSection>
        <Hamburger />
      </He.LeftSection>
      <Logo />
      <He.RightSection>
        <Favorite />
        <Login />
      </He.RightSection>
    </He.NavBar>
  );
}

export default Header;
