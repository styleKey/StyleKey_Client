import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './Login.tsx';
import { AppState } from '../../store/index.tsx';
import * as He from './styles/Header.styles.tsx';
import HamburgerButtonLogo from './images/Hamburgerbutton.svg';
import FavoriteButtonLogo from './images/FavoriteButton.svg';
import BackButton from './images/backbutton.svg';
import StyleKeyLogo from './images/stylekeylogo.svg';
import { Text } from '../common/Common.tsx';

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
          <Text>로그인</Text>
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
            !isLoginPath && <Login /> // isAuth가 아니고, isLoginState도 아닐 때만 <Login/> 렌더링
          )}
        </He.RightSection>
      </He.NavBar>
    </>
  );
}

export default Header;
