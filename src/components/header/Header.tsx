import Hamburger from './Hamburger.tsx';
import Favorite from './Favorite.tsx';
import Login from './Login.tsx';
import Logo from './Logo.tsx';
import * as He from './styles/Header.styles.tsx';

import { useSelector } from 'react-redux';
import { AppState } from '../../store/index.tsx';

function Header() {
  const isAuth = useSelector((state: AppState) => state.auth.isAuthenticated);

  return (
    <He.NavBar>
      <He.LeftSection>
        <Hamburger />
      </He.LeftSection>
      <Logo />
      <He.RightSection>
        {isAuth ? (
          <>
            <Favorite />
            <Login />
          </>
        ) : (
          <Login />
        )}
      </He.RightSection>
    </He.NavBar>
  );
}

export default Header;
