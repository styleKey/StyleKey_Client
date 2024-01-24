import LoginLogo from './images/LoginButton.svg';
import { Styled } from './styles/Login.styles';

function Login() {
  return (
    <Styled.LoginButton>
      <img src={LoginLogo} alt="Login Button" />
    </Styled.LoginButton>
  );
}

export default Login;
