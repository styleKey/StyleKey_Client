import * as L from '../../components/loginpage/styles/Login.style';
import GoogleLogo from './Google.svg';

const GoogleLogin = () => {
  const handleGoogleLogin = () => {
    window.location.href = `http://localhost:9000/oauth2/authorization/google?redirect_uri=http://localhost:5173/oauth/redirect`;
  };
  return (
    <L.GoogleButton onClick={handleGoogleLogin}>
      <img
        src={GoogleLogo}
        alt="구글 로고"
        style={{
          position: 'absolute',
          left: '20px',
        }}
      />
      GOOGLE로 로그인
    </L.GoogleButton>
  );
};

export default GoogleLogin;
