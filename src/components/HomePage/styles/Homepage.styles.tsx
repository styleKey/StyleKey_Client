import styled, { keyframes } from 'styled-components';

const blink = keyframes`
50%{
  opacity:0;
}`;

//HomeTop, HomeMiddle의 height는 HomeBottom의 height에 따라서 조정 필요할 듯.

export const HomeTop = styled.div`
  display: flex;
  justify-content: space-around;
  height: 63dvh;
`;

export const HomeMiddle = styled.div`
  display: flex;
  flex-direction: column;
  height: 30dvh;
  position: relative;
`;

export const HomeBottom = styled.div`
  background-color: lightgreen;
`;

export const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TestButton = styled.button`
  width: 85%;
  height: 68px;
  border-radius: 10px;
  margin: 0 auto;
  border-radius: 12px;
  border: 1px solid #000;
  background: #000;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

export const BlinkingImage1 = styled.img`
  animation: ${blink} 2.5s linear infinite;
  cursor: pointer;
  position: absolute;
  left: 50%; /* 수평 중앙 정렬을 위해 왼쪽에서 50% 위치 */
  transform: translateX(-50%);
  bottom: 14dvh;
`;
export const BlinkingImage2 = styled.img`
  animation: ${blink} 2.5s linear infinite;
  cursor: pointer;
  position: absolute;
  left: 50%; /* 수평 중앙 정렬을 위해 왼쪽에서 50% 위치 */
  transform: translateX(-50%);
  bottom: 13dvh;
`;
