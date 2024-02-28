import MobileLayout from '../components/common/Layout';
import * as L from '../components/loginpage/styles/Login.style';
import stylekeylogo from '../components/loginpage/images/stylekeylogo.svg';
import { Caption, Text } from '../components/common/Common';

import { requestGet } from '../util/http';
import { useQuery } from '@tanstack/react-query';
import { Key } from 'react';
import KakaoLogin from '../components/loginpage/KakaoLogin';
import GoogleLogin from '../components/loginpage/GoogleLogin';

function Login() {
  const { data } = useQuery({
    queryKey: ['questions'],
    queryFn: requestGet,
  });

  let content;

  if (data) {
    content = (
      <ul>
        {data.map((question: { id: Key; content: string; answers: any[] }) => (
          <li key={question.id}>
            <p>{question.content}</p>
            <ul>
              {question.answers.map((answer) => (
                <li key={answer.id}>
                  <p>{answer.content}</p>
                  {answer.image && (
                    <img src={answer.image} alt={answer.content} />
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  }

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
