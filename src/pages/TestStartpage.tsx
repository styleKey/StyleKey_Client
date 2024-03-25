import MobileLayout from '../components/common/Layout';
import * as L from '../components/loginpage/styles/Login.style';
import stylekeylogo from '../components/loginpage/images/stylekeymark.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FadeInText, FadeInButton } from '../components/common/Common';
import useGetTest from '../components/TestPage/hooks/useGetTest';

function TestStartPage() {
  const { data: questions } = useGetTest();
  const navigate = useNavigate();

  useEffect(() => {
    if (questions && questions.length > 0) {
      const firstImage = new Image();
      firstImage.src = questions[0].image_url;
    }
  }, [questions]);

  const navigateToTest = () => {
    navigate('/test');
  };
  return (
    <MobileLayout>
      <L.ImgContainer2 src={stylekeylogo} alt="logo" />
      <FadeInText delay="0s" $marginBottom={30} $fontWeight={400}>
        나는 무슨 유형일까?
      </FadeInText>
      <FadeInText delay="1s" $marginBottom={30} $fontWeight={400}>
        어렵기만한 패션의 세계,
      </FadeInText>
      <FadeInText delay="2s" $fontWeight={400}>
        나만의 스타일을 찾아주는 스타일키!
      </FadeInText>
      <FadeInButton delay="3s" onClick={navigateToTest}>
        패션 성향 테스트 시작!
      </FadeInButton>
    </MobileLayout>
  );
}

export default TestStartPage;
