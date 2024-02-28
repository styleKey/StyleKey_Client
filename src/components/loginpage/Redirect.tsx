import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import { useNavigate } from 'react-router-dom';

const RedirectPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  function getQueryParameter(param: string) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const accessToken = getQueryParameter('token');

  if (accessToken !== null) {
    localStorage.setItem('accessToken', accessToken);
    loginHandler();
    setTimeout(() => {
      navigate('/');
    }, 100);
  }

  // // 카카오 로그인 처리 함수
  // async function kakaoLogin() {
  //   const authorizationCode = getQueryParameter('code');

  //   console.log(authorizationCode);

  //   if (!authorizationCode) {
  //     console.error('Authorization code not found');
  //     return;
  //   }

  //   try {
  //     // 백엔드 서버로부터 accessToken 및 refreshToken 요청
  //     const response = await axiosInstance.post('/auth/kakao', {
  //       code: authorizationCode,
  //     });

  //     const { accessToken, refreshToken } = response.data;

  //     // accessToken 및 refreshToken을 로컬 스토리지에 저장
  //     localStorage.setItem('accessToken', accessToken);
  //     localStorage.setItem('refreshToken', refreshToken);

  //     console.log('로그인 성공');
  //   } catch (error) {
  //     console.error('로그인 실패:', error);
  //   }
  // }

  // kakaoLogin();

  return <div>인증 중입니다. 잠시만 기다려 주세요...</div>;
};

export default RedirectPage;
