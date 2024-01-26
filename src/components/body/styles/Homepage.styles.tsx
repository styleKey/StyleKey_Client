import styled from 'styled-components';

export const Homepage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  margin: 0 16px;
  background-color: grey;
`;

export const HomeTop = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  flex: 0.7;
`;

export const HomeMiddle = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  flex: 0.2;
`;

export const HomeBottom = styled.div`
  flex:1
  background-color: blue;
  `;

export const Container = styled.div`
  width: 296px;
  height: 406px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  background-color: black;
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
  background-color: rgba(169, 169, 169, 0.7);
  z-index: 1;
  cursor: pointer;
`;

export const Slide = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
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
  width: 50%;
  height: 49px;
  background-color: whie;
  border-radius: 10px;
  transform: translateX(50%);
`;
