import React from 'react';
import * as P from './Profile.style';
import { Text } from '../common/Common';

function Profile() {
  return (
    <P.ProfileBox>
      <P.ProfileAvatar />
      <div>
        <div style={{ display: 'flex' }}>
          <Text>회원명</Text>
          <Text>수정하기</Text>
        </div>
        <div>나의 스타일 포인트는 글램입니다.</div>
      </div>
    </P.ProfileBox>
  );
}

export default Profile;
