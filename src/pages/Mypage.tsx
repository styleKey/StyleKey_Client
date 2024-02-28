import React from 'react';

import MobileLayout from '../components/common/Layout';
import SelectItem from '../components/Mypage/SelectItem';
import Profile from '../components/Mypage/Profile';
import heart_img from '../components/Mypage/images/heart.svg';

function Mypage() {
  return (
    <MobileLayout>
      <Profile></Profile>
      <SelectItem icon={heart_img} itemName="좋아요" />
      <SelectItem icon={heart_img} itemName="최근 본 아이템" />
      <SelectItem icon={heart_img} itemName="나의 테스트 기록" />
    </MobileLayout>
  );
}

export default Mypage;
