import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './Login.tsx';
import { AppState } from '../../store/index.tsx';
import * as He from './styles/Header.styles.tsx';
import HamburgerButtonLogo from './images/Hamburgerbutton.svg';
import FavoriteButtonLogo from './images/FavoriteButton.svg';
import BackButton from './images/backbutton.svg';
import StyleKeyLogo from './images/stylekeylogo.svg';
import { TextTitle } from '../common/Text.tsx';

function Header() {
  const navigate = useNavigate();
  const isAuth = useSelector((state: AppState) => state.auth.isAuthenticated);
  const location = useLocation();
  const isLoginPath = location.pathname === '/login';

  return (
    <>
      <He.NavBar2></He.NavBar2>
      <He.NavBar>
        <He.LeftSection>
          {isLoginPath ? (
            <He.HeaderButtons onClick={() => navigate(-1)}>
              <img src={BackButton} alt="뒤로가기 버튼" />
            </He.HeaderButtons>
          ) : (
            <He.HeaderButtons>
              <img src={HamburgerButtonLogo} alt="Hamburger Button" />
            </He.HeaderButtons>
          )}
        </He.LeftSection>
        {isLoginPath ? (
          <TextTitle>로그인</TextTitle>
        ) : (
          <He.Logo>
            <img src={StyleKeyLogo} alt="로고" />
          </He.Logo>
        )}
        <He.RightSection>
          {isAuth ? (
            <>
              <He.HeaderButtons>
                <img src={FavoriteButtonLogo} alt="Favorite Button" />
              </He.HeaderButtons>
              <Login />
            </>
          ) : (
            <Login />
          )}
        </He.RightSection>
      </He.NavBar>
    </>
  );
}

export default Header;
