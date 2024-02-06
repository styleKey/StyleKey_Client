import KakaoLogo from '../../pages/Loginpage/images/kakaologin.svg';

const KakaoLogin = () => {
  const handleKakaoLogin = () => {
    const apikey = import.meta.env.VITE_API_KEY;
    const redirectUri = import.meta.env.VITE_REDIRECT_URI;
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${apikey}&redirect_uri=${redirectUri}&response_type=code`;
  };

  return (
    <img
      src={KakaoLogo}
      alt="카카오 로고"
      style={{ width: '80%', cursor: 'pointer', marginBottom: '10px' }}
      onClick={handleKakaoLogin}
    />
  );
};

export default KakaoLogin;
