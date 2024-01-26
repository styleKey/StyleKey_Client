import NLoginLogo from './images/NLoginButton.svg';
import LoginLogo from './images/LoginButton.svg';
import * as Li from './styles/HeaderButtons.styles';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/index.tsx';
import { authActions } from '../../store/auth.tsx';

function Login() {
  const isAuth = useSelector((state: AppState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const loginHandler = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  const logoutHandler = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();

    dispatch(authActions.logout());
  };

  return (
    <Li.HeaderButtons>
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
          onClick={loginHandler}
          style={{ width: '26px', height: '26px' }}
        />
      )}
    </Li.HeaderButtons>
  );
}

export default Login;
