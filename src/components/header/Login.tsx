import NLoginLogo from './images/NLoginButton.svg';
import LoginLogo from './images/LoginButton.svg';
import { HeaderButtons } from './styles/Header.styles.tsx';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/index.tsx';
import { authActions } from '../../store/auth.tsx';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const navigatetoLogin = () => {
    navigate('/login');
  };

  const isAuth = useSelector((state: AppState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  //로그인 핸들러는 로그인 페이지에서 로그인하면 작동되게 만들어야 함.
  // const loginHandler = (event: React.MouseEvent<HTMLImageElement>) => {
  //   event.preventDefault();
  //   dispatch(authActions.login());
  // };

  const logoutHandler = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();

    dispatch(authActions.logout());
  };

  return (
    <HeaderButtons>
      {isAuth ? (
        <img
          src={LoginLogo}
          alt="Loged in Button"
          onClick={logoutHandler}
          style={{ width: '26px', height: '26px' }}
        />
      ) : (
        <img
          src={NLoginLogo}
          alt="Log in Button"
          onClick={() => {
            navigatetoLogin();
          }}
          style={{ width: '26px', height: '26px' }}
        />
      )}
    </HeaderButtons>
  );
}

export default Login;
