import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const RedirectPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // URL에서 쿼리 파라미터 추출
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      console.log('인증 코드:', code);
      // 여기서 백엔드 서버로 인증 코드를 전송하고,
      // 서버로부터 받은 응답을 처리할 수 있습니다.
      // 예: axios.post('/api/auth/kakao/callback', { code }).then(...)

      // 인증 처리가 완료된 후 메인 페이지 또는 다른 페이지로 리디렉션
      dispatch(authActions.login()); //리덕스 로그인 아이콘 상태관리
      //navigate('/');
    } else {
      // code가 없는 경우, 에러 처리 또는 홈으로 리디렉션
      console.log('인증 코드가 URL에 포함되어 있지 않습니다.');
    }
  }, [navigate]);

  return <div>인증 중입니다. 잠시만 기다려 주세요...</div>;
};

export default RedirectPage;
