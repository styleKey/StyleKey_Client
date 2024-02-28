import React from 'react';
import styled from 'styled-components';

import arrow_img from './images/Next.png';
import { Text } from '../common/Common';

type ItemProps = {
  icon: string;
  itemName: string;
  first?: string;
};

function SelectItem({ icon, itemName }: ItemProps) {
  return (
    <ItemBox>
      <SmallBox>
        <img src={icon} />
        <Text $marginLeft={12}>{itemName}</Text>
      </SmallBox>
      <Arrow />
    </ItemBox>
  );
}

export default SelectItem;

const ItemBox = styled.div`
  height: 60px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid #36363647;
`;

const SmallBox = styled.div`
  display: flex;
  align-items: center;
`;

const Arrow = styled.div`
  width: 36px;
  height: 36px;

  background-image: url(${arrow_img});
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;

  cursor: pointer;
`;
