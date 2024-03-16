import styled, { keyframes, css } from 'styled-components';

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;
export const TestBody = styled.div`
  width: 100%;
  height: calc(100dvh - 102px);
  padding-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const TestNumber = styled.div`
  width: 100%;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
`;

export const TestNumberText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TestContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TestBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 12px;
  border: 2px solid var(--Foundation-Grey-Darker, #363636);
  background: var(--White, #fff);
  margin-bottom: 10px;
`;

export const TestTextBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px 0px;
  text-align: center;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
`;

export const TestPictureBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
interface SelectButtonProps {
  selected: boolean;
  show: boolean;
}

export const SelectButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const SelectButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['show'].includes(prop),
})<SelectButtonProps>`
  display: flex;
  border: none;
  flex-direction: row;
  justify-content: center;
  border-radius: 12px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  color: black;
  font-size: 16px;
  font-weight: 400;
  background-color: ${(props) => (props.selected ? '#363636' : '#f0f0f0')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  animation: ${(props) =>
    props.show
      ? css``
      : css`
          ${fadeOut} 0.6s
        `};
`;

export const TestStartContainer = styled.div`
  width: 100%;
  height: calc(100dvh - 102px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TestStartTop = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TestStartBottom = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
`;
