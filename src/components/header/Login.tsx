import LoginLogo from './images/LoginButton.svg';
import * as Li from './styles/HeaderButtons.styles';

function Login() {
  return (
    <Li.HeaderButtons>
      <img src={LoginLogo} alt="Login Button" />
    </Li.HeaderButtons>
  );
}

export default Login;
