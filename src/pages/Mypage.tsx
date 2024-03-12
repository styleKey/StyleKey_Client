import MobileLayout from '../components/common/Layout';

import Profile from '../components/Mypage/Profile';
import SelectItemStack from '../components/Mypage/SelectItemStack';

function Mypage() {
  return (
    <MobileLayout>
      <Profile></Profile>
      <SelectItemStack />
    </MobileLayout>
  );
}

export default Mypage;
