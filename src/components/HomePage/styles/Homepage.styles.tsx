import styled, { keyframes } from 'styled-components';

const blink = keyframes`
50%{
  opacity:0;
}`;

//HomeTop, HomeMiddle의 height는 HomeBottom의 height에 따라서 조정 필요할 듯.
export const HomeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
`;
export const HomeTop = styled.div`
  display: flex;
  justify-content: space-around;
  height: 63%;
`;

export const HomeMiddle = styled.div`
  display: flex;
  flex-direction: column;
  height: 37%;
  justify-content: space-around;
`;

export const HomeBottom = styled.div`
  background-color: lightgreen;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
  padding-bottom: 30px;
`;
