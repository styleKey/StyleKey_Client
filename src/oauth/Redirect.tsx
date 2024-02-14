import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import request from '../api/api';
import { useMutation } from 'react-query';

const fetchIdToken = async (code: string) => {
  const response = await request<{ code: string }, null, { jwtToken: string }>({
    url: '/api/auth/kakao/callback',
    method: 'post',
    data: { code },
  });
  return response.data;
};

const RedirectPage = () => {
  const navigate = useNavigate();

  // jwt 토큰을 받는 뮤테이션
  const { mutate: fetchIdTokenMutation } = useMutation(fetchIdToken, {
    onSuccess: (data) => {
      // jwt 토큰 콘솔에 띄우기
      console.log(data.data.jwtToken);
    },
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      console.log('인증 코드:', code);
      // 카카오 인증 코드로 ID 토큰 요청
      fetchIdTokenMutation(code);
    } else {
      console.log('인증 코드가 URL에 포함되어 있지 않습니다.');
      // 에러 처리 또는 홈으로 리디렉션
    }
  }, [navigate, fetchIdTokenMutation]);

  return <div>인증 중입니다. 잠시만 기다려 주세요...</div>;
};

export default RedirectPage;
