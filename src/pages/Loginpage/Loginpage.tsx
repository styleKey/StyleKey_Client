import * as Lo from './styles/Loginpage.styles';
import GoogleLogo from './images/Google.svg';
import KakaoLogo from './images/Kakaotalk.svg';
import IdIcon from './images/usericon.svg';
import PwIcon from './images/lockicon.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth.tsx';

function LoginPage() {
  const navigate = useNavigate();
  const navigatetoHomepage = () => {
    navigate('/');
  };

  const dispatch = useDispatch();

  const loginHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <Lo.LoginBody>
      <Lo.LoginForm>
        <Lo.LoginFormTop>
          <Lo.LoginLogo>로고이미지</Lo.LoginLogo>
        </Lo.LoginFormTop>
        <Lo.LoginFormMiddle>
          <Lo.LoginInput>
            <div
              style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={IdIcon}
                alt="아이디"
                style={{ width: '36px', height: '36px' }}
              />
            </div>
            <input type="text" placeholder="아이디" />
          </Lo.LoginInput>
          <Lo.LoginInput>
            <div
              style={{
                width: '41px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: '1px',
              }}
            >
              <img
                src={PwIcon}
                alt="비밀번호"
                style={{ width: '22px', height: '28px' }}
              />
            </div>
            <input type="text" placeholder="비밀번호" />
          </Lo.LoginInput>
          <Lo.LoginButton
            onClick={(e) => {
              loginHandler(e);
              navigatetoHomepage();
            }}
          >
            로그인
          </Lo.LoginButton>
          <Lo.Findbox>
            <div style={{ cursor: 'pointer' }}>회원가입</div>
            <p style={{ color: '#999' }}>|</p>
            <div style={{ cursor: 'pointer' }}>아이디 찾기</div>
            <p style={{ color: '#999' }}>|</p>
            <div style={{ cursor: 'pointer' }}>비밀번호 찾기</div>
          </Lo.Findbox>
        </Lo.LoginFormMiddle>
        <Lo.LoginFormBottom>
          <Lo.EasyLoginBox>
            <Lo.EasyLoginBoxTop>SNS 계정으로 로그인</Lo.EasyLoginBoxTop>
            <Lo.EasyLoginBoxMiddle></Lo.EasyLoginBoxMiddle>
            <Lo.EasyLoginBoxBottom>
              <img
                src={GoogleLogo}
                alt="구글 로그인"
                style={{ cursor: 'pointer' }}
              />
              <img
                src={KakaoLogo}
                alt="카카오 로그인"
                style={{ cursor: 'pointer' }}
              />
            </Lo.EasyLoginBoxBottom>
          </Lo.EasyLoginBox>
        </Lo.LoginFormBottom>
      </Lo.LoginForm>
    </Lo.LoginBody>
  );
}

export default LoginPage;
