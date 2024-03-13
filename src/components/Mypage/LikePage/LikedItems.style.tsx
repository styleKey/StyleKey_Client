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
export const Box = styled.div<{ itemImg?: string }>`
  position: relative;
  width: 169px;
  height: 261px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 2px solid var(--Foundation-Grey-Normal, #999);
  /* background: var(--White, #fff); */
  background-image: url(itemImg);

  cursor: pointer;
`;

export const HeartBox = styled.div<{ isLike?: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
  width: 30px;
  height: 30px;
  background-image: ${({ isLike }) =>
    isLike ? `url(${red_heart_img})` : `url(${heart_img})`};
  background-size: contain;
  z-index: 2;
`;

export const NoItemText = styled(Text)``;
