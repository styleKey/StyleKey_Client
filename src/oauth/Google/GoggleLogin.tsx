import * as L from '../../pages/Loginpage/styles/Login.style';

const GoogleLogin = () => {
  const handleGoogleLogin = () => {
    window.location.href = `http://localhost:5173/oauth2/authorize/google`;
  };
  return <L.GoogleButton onClick={handleGoogleLogin} />;
};

export default GoogleLogin;
