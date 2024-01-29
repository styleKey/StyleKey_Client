import React, { useState, useEffect, useRef } from 'react';
import * as Ho from './styles/Homepage.styles';
import styled from 'styled-components';

import a from './images/a.png';
import b from './images/2.png';
import c from './images/3.png';

import DownButton from './images/Downbutton.svg';

interface Character {
  id: number;
  img: string;
}

const data: Character[] = [
  {
    id: 1,
    img: a,
  },
  {
    id: 2,
    img: b,
  },
  {
    id: 3,
    img: c,
  },
];

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

  const [slideIndex, setSlideIndex] = useState(1);

  const moveToPrevSlide = () => {
    setSlideIndex((prev) => (prev === 1 ? data.length : prev - 1));
  };

  const moveToNextSlide = () => {
    setSlideIndex((prev) => (prev === data.length ? 1 : prev + 1));
  };

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      moveToNextSlide();
    }, 3000); // Adjust the interval time as needed (e.g., 3000 milliseconds for 3 seconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [slideIndex]);

  const Photo = styled.img`
    width: 296px;
    height: 409px;
    border-radius: 10px;
  `;

  return (
    <Ho.Homepage>
      <Ho.HomeTop>
        <Ho.Container>
          <Ho.Arrow direction="prev" onClick={moveToPrevSlide}>
            <p>&#8249;</p>
          </Ho.Arrow>
          {data.map((character) => (
            <Ho.Slide
              key={character.id}
              className={character.id === slideIndex ? 'active' : undefined}
            >
              <Photo src={character.img} />
            </Ho.Slide>
          ))}
          <Ho.Arrow direction="next" onClick={moveToNextSlide}>
            <p>&#8250;</p>
          </Ho.Arrow>
          <Ho.DotContainer>
            {data.map((character) => (
              <Ho.Dot
                key={character.id}
                className={character.id === slideIndex ? 'active' : undefined}
                onClick={() => moveDot(character.id)}
              />
            ))}
          </Ho.DotContainer>
        </Ho.Container>
      </Ho.HomeTop>
      <Ho.HomeMiddle>
        <Ho.TestButton>테스트 버튼</Ho.TestButton>
        <Ho.BlinkingImage
          src={DownButton}
          alt="스크롤 버튼"
          style={{
            width: '32px',
            margin: '0 auto',
          }}
          onClick={scrollToBottom}
        ></Ho.BlinkingImage>
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
    </Ho.Homepage>
  );
};

export default Homepage;
