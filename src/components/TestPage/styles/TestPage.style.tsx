import styled, { keyframes, css } from 'styled-components';
import { Button } from '../../common/Common';

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;
export const TestBody = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

export const TestNumber = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 25px;
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

export const TestTextBox = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  padding: 66px 27px;
  text-align: center;
  margin-bottom: 24px;
  word-break: break-all;

  border-radius: 12px;
  border: 2px solid var(--Foundation-Grey-Darker, #363636);
  background: var(--White, #fff);
`;
interface SelectButtonProps {
  selected: boolean;
  show: boolean;
}
export const SelectButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => !['show'].includes(prop),
})<SelectButtonProps>`
  border-radius: 12px;
  width: 100%;
  padding: 16px 20px;
  margin-bottom: 16px;
  color: black;
  font-size: 16px;
  font-weight: 400;
  background-color: ${(props) => (props.selected ? 'black' : '#f0f0f0')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  animation: ${(props) =>
    props.show
      ? css``
      : css`
          ${fadeOut} 0.6s
        `};
`;
