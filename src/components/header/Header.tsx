import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './LoginAuth.tsx';
import { AppState } from '../../store/index.tsx';
import * as He from './styles/Header.styles.tsx';
import FavoriteButtonLogo from './images/FavoriteButton.svg';
import BackButton from './images/backbutton.svg';
import StyleKeyLogo from './images/stylekeylogo.svg';
import { Text } from '../common/Common.tsx';

function Header() {
  const navigate = useNavigate();
  const isAuth = useSelector((state: AppState) => state.auth.isAuthenticated);
  const location = useLocation();
  const isLoginPath = location.pathname === '/login';
  const isTestPage = location.pathname === '/teststart';
  const isTestPath = location.pathname === '/test';
  const isResultPath = location.pathname === '/result';

  function headerMain() {
    if (isLoginPath) {
      return <Text style={{ margin: 'auto' }}>로그인</Text>;
    } else if (isTestPage || isTestPath) {
      return <Text $fontWeight={500}>패션 성향 테스트</Text>; // TestPath에 대한 텍스트
    } else {
      return (
        <He.Logo>
          <img src={StyleKeyLogo} alt="로고" />
        </He.Logo>
      );
    }
  }

  return (
    <>
      <He.NavBar2></He.NavBar2>
      <He.NavBar>
        <He.LeftSection>
          {(() => {
            switch (true) {
              case isResultPath:
                return (
                  <He.HeaderButtons onClick={() => navigate(-1)}>
                    <img src={BackButton} alt="뒤로가기 버튼" />
                  </He.HeaderButtons>
                );
              case isTestPage:
                return (
                  <He.HeaderButtons onClick={() => navigate(-1)}>
                    <img src={BackButton} alt="뒤로가기 버튼" />
                  </He.HeaderButtons>
                );
              case isTestPath:
                return (
                  <He.HeaderButtons onClick={() => navigate(-1)}>
                    <img src={BackButton} alt="뒤로가기 버튼" />
                  </He.HeaderButtons>
                );
              case isLoginPath:
                return (
                  <He.HeaderButtons onClick={() => navigate(-1)}>
                    <img src={BackButton} alt="뒤로가기 버튼" />
                  </He.HeaderButtons>
                );
              default:
                return <He.HeaderButtons></He.HeaderButtons>;
            }
          })()}
        </He.LeftSection>
        {headerMain()}
        <He.RightSection>
          {isAuth ? (
            <>
              {(() => {
                switch (true) {
                  case isTestPage:
                    return <></>;
                  case isTestPath:
                    return <></>;
                  case isLoginPath:
                    return (
                      <>
                        <He.HeaderButtons>
                          <img src={FavoriteButtonLogo} alt="Favorite Button" />
                        </He.HeaderButtons>
                        <Login />
                      </>
                    );
                  default:
                    return (
                      <>
                        <He.HeaderButtons>
                          <img src={FavoriteButtonLogo} alt="Favorite Button" />
                        </He.HeaderButtons>
                        <Login />
                      </>
                    );
                }
              })()}
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
