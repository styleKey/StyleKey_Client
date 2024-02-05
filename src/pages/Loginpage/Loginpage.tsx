import StylekeyLogo from './images/stylekeylogo.svg';

import GoogleLogo from './images/googlelogin.svg';
import * as Lo from './styles/Loginpage.styles';

import KakaoLogin from '../../oauth/Kakao/KakaoLogin';

function LoginPage() {
  return (
    <Lo.LoginPage>
      <Lo.LoginpageTop>
        <Lo.LoginpageTopLogo>
          <img
            src={StylekeyLogo}
            alt="StyleKeyLogo"
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <p>나만의 스타일을 찾아주는 스타일 키</p>
        </Lo.LoginpageTopLogo>
      </Lo.LoginpageTop>
      <Lo.LoginpageMiddle>
        로그인을 하면 결과를 저장하고 <br />
        자신의 style point에 어울리는 아이템 확인도 가능해요!
      </Lo.LoginpageMiddle>
      <Lo.LoginpageBottom>
        <Lo.LoginpageBottomText>SNS 계정으로 로그인</Lo.LoginpageBottomText>
        <Lo.LoginpageBottomButton>
          <KakaoLogin />
          <img
            src={GoogleLogo}
            alt="구글 로고"
            style={{ width: '80%', cursor: 'pointer' }}
          />
        </Lo.LoginpageBottomButton>
      </Lo.LoginpageBottom>
    </Lo.LoginPage>
  );
}

export default LoginPage;
