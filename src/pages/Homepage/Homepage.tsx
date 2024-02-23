import React, { useRef } from 'react';
import * as Ho from './styles/Homepage.styles';
import { MobileLayout } from '../../components/common/Layout';

import DownButton from './images/Downbutton.svg';
import Slide from '../../components/swiper/Swiper';

const Homepage: React.FC = () => {
  const homeBottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (homeBottomRef.current) {
      const homeBottomPosition =
        homeBottomRef.current.getBoundingClientRect().top;
      const offsetPosition = homeBottomPosition + window.scrollY - 99;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <MobileLayout>
      <Ho.HomeTop>
        <Ho.Container>
          <Slide />
        </Ho.Container>
      </Ho.HomeTop>
      <Ho.HomeMiddle>
        <Ho.TestButton>패션 취향 테스트 하러 가기</Ho.TestButton>
        <Ho.BlinkingImage1
          src={DownButton}
          alt="스크롤 버튼"
          style={{
            width: '30px',
            margin: '0 auto',
          }}
          onClick={scrollToBottom}
        ></Ho.BlinkingImage1>
        <Ho.BlinkingImage2
          src={DownButton}
          alt="스크롤 버튼"
          style={{
            width: '30px',
            margin: '0 auto',
          }}
          onClick={scrollToBottom}
        ></Ho.BlinkingImage2>
      </Ho.HomeMiddle>
      <Ho.HomeBottom ref={homeBottomRef}>
        <div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
          <div>
            <div>sdfsdf</div>
          </div>
          <div>
            <div>aaaaa</div>
          </div>
          <div>
            <div>sdf</div>
          </div>
        </div>
      </Ho.HomeBottom>
    </MobileLayout>
  );
};

export default Homepage;
