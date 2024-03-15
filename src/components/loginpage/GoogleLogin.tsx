import * as L from './styles/Login.style';
const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    //백엔드 서버 바꿔야 함
    window.location.href = `https://dev.stylekey.shop/oauth2/authorization/google?redirect_uri=https://style-key-client.vercel.app/oauth/redirect`;
  };
  return (
    <L.GoogleButton onClick={handleGoogleLogin}>GOOGLE로 로그인</L.GoogleButton>
  );
};

export default GoogleLogin;
