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
      <Text $marginTop={78}>
        로그인하면 결과를 저장하고 <br />
        자신의 style point에 어울리는 아이템 <br />
        확인도 가능해요!
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
