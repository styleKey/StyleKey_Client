import { useNavigate } from 'react-router-dom';
import SelectItem from './SelectItem';

import heart_img from './images/heart.svg';
import search_img from './images/search.svg';
import scroll_img from './images/Scroll-r.svg';

function SelectItemStack() {
  const navigate = useNavigate();
  return (
    <div>
      <SelectItem
        onClick={() => navigate('likes')}
        icon={heart_img}
        itemName="좋아요"
      />
      <SelectItem
        onClick={() => navigate('likes')}
        icon={search_img}
        itemName="최근 본 아이템"
      />
      <SelectItem
        onClick={() => navigate('likes')}
        icon={scroll_img}
        itemName="나의 테스트 기록"
      />
    </div>
  );
}

export default SelectItemStack;
