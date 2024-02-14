import { MobileLayout } from '../../components/common/Layout';
import * as L from './styles/Login.style';
import stylekeylogo from '../../pages/Loginpage/images/stylekeylogo.svg';
import { Caption, TextRegular } from '../../components/common/Text';

import axios from 'axios';

function Login() {
  const requestGet = async () => {
    const response = await axios.get('http://localhost:9000/api/test-question');
    return response;
  };

  return (
    <MobileLayout>
      <L.ImgContainer src={stylekeylogo} alt="logo" />
      <Caption>나만의 스타일을 찾아주는 스타일 키</Caption>
      <TextRegular $marginTop={78}>
        로그인하면 결과를 저장하고 <br />
        자신의 style point에 어울리는 아이템 <br />
        확인도 가능해요!
      </TextRegular>
      <L.ButtonContainer>
        <L.SnsCaption> SNS 계정으로 로그인</L.SnsCaption>
        <L.KakaoButton onClick={requestGet} />
        <L.GoogleButton />
      </L.ButtonContainer>
    </MobileLayout>
  );
}

export default Login;
