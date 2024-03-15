import styled, { keyframes, css } from 'styled-components';
import { Button } from '../../common/Common';

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;
export const TestBody = styled.div`
  width: 100%;
  margin-top: 2.5dvh;
  display: flex;
  flex-direction: column;
`;

export const TestNumber = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 1.5dvh;
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

export const TestTextBox = styled.div`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px 0px;
  text-align: center;
  margin-bottom: 24px;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  border-radius: 12px;
  border: 2px solid var(--Foundation-Grey-Darker, #363636);
  background: var(--White, #fff);
`;

export const TestPictureBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5dvh;
`;
interface SelectButtonProps {
  selected: boolean;
  show: boolean;
}
export const SelectButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => !['show'].includes(prop),
})<SelectButtonProps>`
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  text-align: center;
  width: 100%;
  margin-bottom: 1dvh;
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
