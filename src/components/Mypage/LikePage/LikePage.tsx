import MobileLayout from '../../common/Layout';
import ItemSlider from './ItemSlider';
import LikedItems from './LikedItems';

function LikePage() {
  return (
    <MobileLayout>
      <ItemSlider />
      <LikedItems />
    </MobileLayout>
  );
}

export default LikePage;
