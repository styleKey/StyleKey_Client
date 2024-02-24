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
  height: 58vh;
`;

export const HomeMiddle = styled.div`
  display: flex;
  flex-direction: column;
  height: 32vh;
  position: relative;
`;

export const HomeBottom = styled.div`
  background-color: lightgreen;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TestButton = styled.button`
  width: 80%;
  height: 25%;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 30px;
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
  bottom: 100px;
`;
export const BlinkingImage2 = styled.img`
  animation: ${blink} 2.5s linear infinite;
  cursor: pointer;
  position: absolute;
  left: 50%; /* 수평 중앙 정렬을 위해 왼쪽에서 50% 위치 */
  transform: translateX(-50%);
  bottom: 110px;
`;
