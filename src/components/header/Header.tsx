import Hamburger from './Hamburger.tsx';
import Favorite from './Favorite.tsx';
import Login from './Login.tsx';
import Logo from './Logo.tsx';
import { Styled } from './styles/Header.styles.tsx';

function Header() {
  return (
    <Styled.NavBar>
      <Styled.LeftSection>
        <Hamburger />
      </Styled.LeftSection>
      <Logo />
      <Styled.RightSection>
        <Favorite />
        <Login />
      </Styled.RightSection>
    </Styled.NavBar>
  );
}

export default Header;
