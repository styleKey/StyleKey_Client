import styled, { keyframes } from 'styled-components';

const blink = keyframes`
50%{
  opacity:0;
}`;

//HomeTop, HomeMiddle의 height는 HomeBottom의 height에 따라서 조정 필요할 듯.
export const HomeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const HomeTop = styled.div`
  display: flex;
  height: 500px;
`;

export const HomeMiddle = styled.div`
  display: flex;
  flex-direction: column;
  height: 230px;
  position: relative;
`;

export const HomeBottom = styled.div`
  background-color: lightgreen;
`;

export const Container = styled.div`
  width: 100%;
  height: 93%;
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
  @media screen and (min-height: 845px) {
    width: 90%;
    height: 80px;
  }
`;

export const BlinkingImage1 = styled.img`
  animation: ${blink} 2.5s linear infinite;
  cursor: pointer;
  position: absolute;
  left: 50%; /* 수평 중앙 정렬을 위해 왼쪽에서 50% 위치 */
  transform: translateX(-50%);
  bottom: 40px;
`;
export const BlinkingImage2 = styled.img`
  animation: ${blink} 2.5s linear infinite;
  cursor: pointer;
  position: absolute;
  left: 50%; /* 수평 중앙 정렬을 위해 왼쪽에서 50% 위치 */
  transform: translateX(-50%);
  bottom: 30px;
`;
