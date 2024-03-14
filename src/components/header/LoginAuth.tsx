import NLoginLogo from './images/NLoginButton.svg';
import LoginLogo from './images/LoginButton.svg';
import { HeaderButtons } from './styles/Header.styles.tsx';
import { useStore } from '../../store/auth.tsx';
import { useNavigate } from 'react-router-dom';

function LoginAuth() {
  const navigate = useNavigate();
  const navigatetoLogin = () => {
    navigate('/login');
  };
  const { auth } = useStore();

  return (
    <HeaderButtons>
      {auth ? (
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

export default LoginAuth;
