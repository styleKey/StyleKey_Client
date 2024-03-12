import * as P from './Profile.style';
import { Text } from '../common/Common';

function Profile() {
  // TODO : 사용자 DATA API 연결
  return (
    <P.ProfileBox>
      <P.ProfileAvatar />
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            marginBottom: '4px',
          }}
        >
          <Text $marginRight={4}>회원명</Text>
          <P.LinkSpan>수정하기</P.LinkSpan>
          {/* TODO : 수정하기 모달창 */}
        </div>
        <div>나의 스타일 포인트는 글램이에요.</div>
      </div>
    </P.ProfileBox>
  );
}

export default Profile;
