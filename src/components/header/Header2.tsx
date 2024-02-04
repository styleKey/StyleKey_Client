import Favorite from './Favorite.tsx';
import Login from './Login.tsx';
import BackButton from './images/backbutton.svg';
import * as He from './styles/Header.styles.tsx';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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

export default Header2;
