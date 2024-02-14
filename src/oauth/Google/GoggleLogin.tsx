import GoogleLogo from '../../pages/Loginpage/images/googlelogin.svg';

const GoogleLogin = () => {
  const handleGoogleLogin = () => {
    window.location.href = `http://localhost:5173/oauth2/authorize/google`;
  };

  return (
    <img
      src={GoogleLogo}
      alt="카카오 로고"
      style={{ width: '80%', cursor: 'pointer', marginBottom: '10px' }}
      onClick={handleGoogleLogin}
    />
  );
};

export default GoogleLogin;
