import axios from 'axios';

import * as L from './styles/Login.style';
import GoogleLogo from './images/googlelogin.svg';

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
    <L.GoogleButton onClick={handleGoogleLogin}>
      <img
        src={GoogleLogo}
        alt="구글 로고"
        style={
          {
            // position: 'absolute',
            // left: '20px',
          }
        }
      />
      GOOGLE로 로그인
    </L.GoogleButton>
  );
};

export default GoogleLogin;
