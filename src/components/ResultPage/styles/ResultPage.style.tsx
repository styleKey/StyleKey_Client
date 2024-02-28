import styled from 'styled-components';

import { Text, Button } from '../../common/Common';

export const ContentsBox = styled.div`
  width: 100%;
  /* height: 250px; */

  margin-top: 24px;
  border-radius: 12px;
  padding: 25px 19px;
  background: var(--White, #fff);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const KeyTypo = styled.div`
  color: #000;
  font-family: Pretendard;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  & > div {
    display: inline-flex;
    position: relative;
    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
      width: 115%;
      height: 16px;
      background-color: #d9d9d9;
    }
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 448px;
  margin-top: 14px;
  background-color: #d29bd2;
`;

export const Title = styled(Text)`
  position: relative;
  z-index: 2;
  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    width: 105%;
    height: 16px;
    background-color: #d9d9d9;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;

export const ListItem = styled.li`
  list-style-type: circle;
  list-style-position: inside;
  line-height: 125%;
  margin-bottom: 16px;
`;

export const LinkButton = styled(Button)`
  margin: 30px auto;
  & > img {
    margin-right: 10px;
  }
`;
