import { useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../../store/auth.tsx';

import Login from './LoginAuth.tsx';
import * as He from './styles/Header.styles.tsx';
import FavoriteButtonLogo from './images/FavoriteButton.svg';
import BackButton from './images/backbutton.svg';
import StyleKeyLogo from './images/stylekeylogo.svg';
import { Text } from '../common/Common.tsx';

interface Paths {
  [key: string]: string;
}

const PATH_CONVERT: Paths = {
  '/login': '로그인',
  '/teststart': '패션 유형 테스트',
  '/test': '패션 유형 테스트',
  '/mypage': '마이페이지',
  '/mypage/likes': '좋아요',
};

function Header() {
  const { auth } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const pathName: string = location.pathname;

  function headerMain() {
    if (PATH_CONVERT[pathName] === undefined) {
      return (
        <He.Logo>
          <img src={StyleKeyLogo} alt="로고" />
        </He.Logo>
      );
    } else {
      return <Text $fontWeight={500}>{PATH_CONVERT[pathName]}</Text>; // TestPath에 대한 텍스트
    }
  }

  <>
    <He.HeaderButtons>
      <img src={FavoriteButtonLogo} alt="Favorite Button" />
    </He.HeaderButtons>
    <Login />
  </>;
  return (
    <>
      <He.NavBar2></He.NavBar2>
      <He.NavBar>
        <He.LeftSection>
          {pathName === '/' ? null : (
            <He.HeaderButtons onClick={() => navigate(-1)}>
              <img src={BackButton} alt="뒤로가기 버튼" />
            </He.HeaderButtons>
          )}
        </He.LeftSection>
        {headerMain()}
        <He.RightSection>
          {auth && pathName.includes('/test') && <></>}
          {auth && !pathName.includes('/test') && (
            <>
              <He.HeaderButtons>
                <img src={FavoriteButtonLogo} alt="Favorite Button" />
              </He.HeaderButtons>
              <Login />
            </>
          )}
          {!auth && !pathName.includes('/login') && <Login />}
        </He.RightSection>
      </He.NavBar>
    </>
  );
}

export default Header;
