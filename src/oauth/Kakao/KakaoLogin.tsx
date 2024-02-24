import * as L from '../../components/loginpage/styles/Login.style';
import KakaoLogo from './Kakaotalk.svg';

const KakaoLogin = () => {
  const handleKakaoLogin = () => {
    const apikey = import.meta.env.VITE_API_KEY;
    const redirectUri = import.meta.env.VITE_REDIRECT_URI;
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${apikey}&redirect_uri=${redirectUri}&response_type=code`;
  };

  return (
    <L.KakaoButton onClick={handleKakaoLogin}>
      <img
        src={KakaoLogo}
        alt="카카오 로고"
        style={{
          position: 'absolute',
          left: '20px',
        }}
      />
      KAKAO로 로그인
    </L.KakaoButton>
  );
};

export default KakaoLogin;
