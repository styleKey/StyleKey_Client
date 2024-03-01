import MobileLayout from '../components/common/Layout';
import * as L from '../components/loginpage/styles/Login.style';
import stylekeylogo from '../components/loginpage/images/stylekeylogo.svg';
import { useNavigate } from 'react-router-dom';
import { FadeInText, FadeInButton } from '../components/common/Common';
import useGetTest from '../components/TestPage/hooks/useGetTest';

function TestStartPage() {
  useGetTest();
  const navigate = useNavigate();
  const navigatetoTest = () => {
    navigate('/test');
  };
  return (
    <MobileLayout>
      <L.ImgContainer2 src={stylekeylogo} alt="logo" />
      <FadeInText
        delay="0s"
        $marginBottom={30}
        $fontSize={16}
        $fontWeight={400}
      >
        나는 무슨 유형일까?
      </FadeInText>
      <FadeInText
        delay="1s"
        $marginBottom={30}
        $fontSize={16}
        $fontWeight={400}
      >
        어렵기만한 패션의 세계,
      </FadeInText>
      <FadeInText delay="2s" $fontSize={16} $fontWeight={400}>
        나만의 스타일을 찾아주는 스타일키!
      </FadeInText>
      <FadeInButton delay="3s" onClick={navigatetoTest}>
        패션 성향 테스트 시작!
      </FadeInButton>
    </MobileLayout>
  );
}

export default TestStartPage;
