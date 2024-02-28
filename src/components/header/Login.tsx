import NLoginLogo from './images/NLoginButton.svg';
import LoginLogo from './images/LoginButton.svg';
import { HeaderButtons } from './styles/Header.styles.tsx';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/index.tsx';
import { useNavigate } from 'react-router-dom';
/**TODO : Login 파일명 중복되어서 파일명 수정필요 */
function Login() {
  const navigate = useNavigate();
  const navigatetoLogin = () => {
    navigate('/login');
  };

  const isAuth = useSelector((state: AppState) => state.auth.isAuthenticated);

  return (
    <HeaderButtons>
      {isAuth ? (
        <img
          src={LoginLogo}
          alt="Loged in Button"
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
