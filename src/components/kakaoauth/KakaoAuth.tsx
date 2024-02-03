import { useMutation } from 'react-query';
import axios from 'axios';

// // 백엔드 API와 통신하는 함수
// const kakaoLogin = (authObj: { access_token: any }) => {
//   return axios.post('/api/auth/kakao', { token: authObj.access_token });
// };

// // 카카오 로그인을 처리하는 커스텀 훅
// export const useKakaoLogin = () => {
//   return useMutation(kakaoLogin);
//   // 여기서 authObj를 사용하여 백엔드에 로그인 요청을 보냅니다.
//   // 예: return axios.post('/api/auth/kakao', { token: authObj.access_token });
// };
//테스트 용

const mockKakaoLogin = (authObj: { access_token: any }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (authObj.access_token) {
        resolve({
          data: { message: 'Login successful', token: authObj.access_token },
        });
      } else {
        reject(new Error('No access token provided'));
      }
    }, 1000);
  });
};

export const useKakaoLogin = () => {
  return useMutation(mockKakaoLogin);
};
