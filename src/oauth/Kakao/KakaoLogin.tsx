import * as L from '../../pages/Loginpage/styles/Login.style';

const KakaoLogin = () => {
  const handleKakaoLogin = () => {
    const apikey = import.meta.env.VITE_API_KEY;
    const redirectUri = import.meta.env.VITE_REDIRECT_URI;
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${apikey}&redirect_uri=${redirectUri}&response_type=code`;
  };

  return <L.KakaoButton onClick={handleKakaoLogin} />;
};

export default KakaoLogin;
