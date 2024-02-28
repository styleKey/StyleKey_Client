import React from 'react';

import SelectItem from './SelectItem';

import heart_img from './images/heart.svg';

function SelectItemStack() {
  return (
    <div>
      <SelectItem icon={heart_img} itemName="좋아요" />
      <SelectItem icon={heart_img} itemName="최근 본 아이템" />
      <SelectItem icon={heart_img} itemName="나의 테스트 기록" />
    </div>
  );
}

export default SelectItemStack;
