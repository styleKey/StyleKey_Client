import styled, { keyframes, css } from 'styled-components';
import { Button } from '../../common/Common';

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;
export const TestBody = styled.div`
  width: 100%;
  height: calc(100dvh - 70px);
  overflow: auto;
  padding-top: 15px;
  display: flex;
  flex-direction: column;

  /* 웹킷 기반 브라우저에서 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }

  /* 파이어폭스에서 스크롤바 숨기기 */
  scrollbar-width: none;

  /* IE 및 엣지에서 스크롤바 숨기기 */
  -ms-overflow-style: none;
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

export const TestTextBox = styled.div`
  background-color: #f0f0f0;
  word-break: keep-all;
  display: flex;
  flex-direction: row;

  width: 100%;
  padding: 20px 0px;
  text-align: center;
  margin-bottom: 15px;
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
  margin-bottom: 10px;
`;
interface SelectButtonProps {
  selected: boolean;
  show: boolean;
}
export const SelectButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => !['show'].includes(prop),
})<SelectButtonProps>`
  display: flex;
  word-break: keep-all;
  flex-direction: row;
  height: calc(var(--base-font-size) + 32px);
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 12px;
  text-align: center;
  width: 100%;
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
