import styled, { keyframes } from 'styled-components';

const blink = keyframes`
50%{
  opacity:0;
}`;

//HomeTop, HomeMiddle의 height는 HomeBottom의 height에 따라서 조정 필요할 듯.

export const Homepage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
`;

export const HomeTop = styled.div`
  display: flex;
  align-items: center;
  height: 60vh;
`;

export const HomeMiddle = styled.div`
  display: flex;
  flex-direction: column;
  height: 29vh;
  position: relative;
`;

export const HomeBottom = styled.div`
  background-color: lightgreen;
`;

export const Container = styled.div`
  width: 296px;
  height: 406px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
`;

interface ArrowProps {
  direction: 'prev' | 'next';
}

export const Arrow = styled.button<ArrowProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 10px;
  left: ${({ direction }) => direction === 'prev' && '0px'};
  right: ${({ direction }) => direction === 'next' && '0px'};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(169, 169, 169, 0.5);
  z-index: 1;
  cursor: pointer;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > p {
    margin-top: 2px; /* 상단 마진으로 위치 조정 */
    margin-left: 0px;
    margin-bottom: 5px; /* 하단 마진으로 위치 조정 */
  }
`;

export const Slide = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.active {
    opacity: 1;
  }
`;

export const DotContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(169, 169, 169, 0.5);
  cursor: pointer;
  &.active {
    background-color: white;
  }
`;

export const TestButton = styled.button`
  width: 70%;
  height: 30%;
  background-color: white;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 30px;
`;

export const BlinkingImage = styled.img`
  animation: ${blink} 2.5s linear infinite;
  cursor: pointer;
  position: absolute;
  left: 50%; /* 수평 중앙 정렬을 위해 왼쪽에서 50% 위치 */
  transform: translateX(-50%);
  bottom: 40px;
`;
