import * as L from './styles/Login.style';
const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    window.location.href = `http://localhost:9000/oauth2/authorization/google?redirect_uri=http://localhost:5173/oauth/redirect`;
    // const response = await axios.get(
    //   `http://localhost:9000/oauth2/authorization/google?redirect_uri=http://localhost:5173/oauth/redirect`,
    //   {
    //     withCredentials: true,
    //   },
    // );
    // console.log(response);
  };
  return (
    <L.GoogleButton onClick={handleGoogleLogin}>GOOGLE로 로그인</L.GoogleButton>
  );
};

export default GoogleLogin;
