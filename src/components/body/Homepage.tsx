import React, { useState, useEffect } from 'react';
import * as Ho from './styles/Homepage.styles';
import styled from 'styled-components';

import a from './images/a.png';
import b from './images/2.png';
import c from './images/3.png';

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
      <Ho.Container>
        <Ho.Arrow direction="prev" onClick={moveToPrevSlide}>
          ←
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
          →
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
      <Ho.TestButton>테스트 버튼</Ho.TestButton>
    </Ho.Homepage>
  );
};

export default Homepage;
