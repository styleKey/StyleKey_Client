import styled from 'styled-components';
import heart_img from '../images/heart.svg';
import red_heart_img from '../images/red_heart.svg';
import { Text } from '../../common/Common';

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 16px 20px;
`;
// TODO: 이미지, 좋아요 표시 여부,
export const Box = styled.div<{ isLike?: boolean; itemImg?: string }>`
  width: 169px;
  height: 261px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 2px solid var(--Foundation-Grey-Normal, #999);
  /* background: var(--White, #fff); */
  background-image: url(itemImg);

  cursor: pointer;

  &::after {
    content: '';
    /* background-image: url(${(props) =>
      props.isLike ? red_heart_img : heart_img};); */
    z-index: 2;
  }
`;

export const NoItemText = styled(Text)``;
