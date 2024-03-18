import MobileLayout from '../components/common/Layout';
import * as L from '../components/loginpage/styles/Login.style';
import stylekeylogo from '../components/loginpage/images/stylekeymark.png';
import { Caption, Text } from '../components/common/Common';

import KakaoLogin from '../components/loginpage/KakaoLogin';
import GoogleLogin from '../components/loginpage/GoogleLogin';

function Login() {
  return (
    <MobileLayout>
      <L.ImgContainer src={stylekeylogo} alt="logo" />
      <Caption>나만의 스타일을 찾아주는 스타일 키</Caption>
      <Text $fontSize={16} $fontWeight={400} $marginTop={78}>
        로그인을 하면 테스트 기록이 저장되고 <br />
        자신의 style point에 어울리는 코디룩도 볼 수 있어요!
      </Text>
      <L.ButtonContainer>
        <L.SnsCaption> SNS 계정으로 로그인</L.SnsCaption>
        <KakaoLogin />
        <GoogleLogin />
      </L.ButtonContainer>
    </MobileLayout>
  );
}

export default Login;
