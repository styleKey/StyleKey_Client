import HamburgerButtonLogo from './images/Hamburgerbutton.svg';
import FavoriteButtonLogo from './images/FavoriteButton.svg';
import Login from './Login.tsx';
import { Logo } from './styles/Header.styles.tsx';
import { HeaderButtons } from './styles/Header.styles.tsx';
import * as He from './styles/Header.styles.tsx';
import BackButton from './images/backbutton.svg';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/index.tsx';

function Header2() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // 현재 페이지에서 이전 페이지로 이동
  };

  const isAuth = useSelector((state: AppState) => state.auth.isAuthenticated);

  return (
    <He.NavBar>
      <He.LeftSection>
        <img
          src={BackButton}
          alt="뒤로가기 버튼"
          style={{ marginLeft: '11.42px', cursor: 'pointer' }}
          onClick={goBack}
        />
      </He.LeftSection>
      <p style={{ fontSize: '20px', fontWeight: '500' }}>로그인</p>
      <He.RightSection>
        {isAuth ? (
          <>
            <HeaderButtons>
              <img src={FavoriteButtonLogo} alt="Favorite Button" />
            </HeaderButtons>
            <Login />
          </>
        ) : (
          <Login />
        )}
      </He.RightSection>
    </He.NavBar>
  );
}

function Header() {
  const isAuth = useSelector((state: AppState) => state.auth.isAuthenticated);

  return (
    <He.NavBar>
      <He.LeftSection>
        <HeaderButtons>
          <img src={HamburgerButtonLogo} alt="Hamburger Button" />
        </HeaderButtons>
      </He.LeftSection>
      <Logo>로고</Logo>
      <He.RightSection>
        {isAuth ? (
          <>
            <HeaderButtons>
              <img src={FavoriteButtonLogo} alt="Favorite Button" />
            </HeaderButtons>
            <Login />
          </>
        ) : (
          <Login />
        )}
      </He.RightSection>
    </He.NavBar>
  );
}

function HeaderWrapper() {
  const location = useLocation();
  const isLoginPath = location.pathname === '/login';

  return isLoginPath ? <Header2 /> : <Header />;
}

export default HeaderWrapper;
