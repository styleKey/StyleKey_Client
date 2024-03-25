import { useState } from 'react';
import * as LI from './LikedItems.style';
import useGetUserLiked from '../hooks/useGetUserLikeItem';
import {
  UserLikeItemType,
  UserLikeCoordiType,
} from '../hooks/useGetUserLikeItem';

interface LikedItemsProps {
  section: string;
  categories: string;
}

// category 별 sort 기능 필요
function LikedItems({ section, categories }: LikedItemsProps) {
  const [isLike, setIsLike] = useState(true);
  const items = useGetUserLiked(section); // 인자로 section value

  // TODO :
  // 코디룩인 경우 style_id로 분류
  // 아이템인 경우 category_id로 분류
  const categorizeItems = (section: string, categories: string) => {};

  return (
    <LI.GridLayout>
      {section === '아이템' &&
        items?.map((item) => {
          item = item as UserLikeItemType;
          return (
            <LI.Box itemImgSrc={item.item_image_url}>
              {item.title}
              <LI.HeartBox
                isLike={isLike}
                onClick={() => setIsLike((prev) => !prev)}
              />
            </LI.Box>
          );
        })}

      {section === '코디룩' &&
        items?.map((item) => {
          item = item as UserLikeCoordiType;
          return (
            <LI.Box itemImgSrc={item.coordinate_look_image_url}>
              {item.title}
              <LI.HeartBox
                isLike={isLike}
                onClick={() => setIsLike((prev) => !prev)}
              />
            </LI.Box>
          );
        })}

      {/* 빈 배열일 경우 */}
      {items?.length === 0 && (
        <LI.NoItemText>
          좋아하는 코디룩이나 아이템을
          <br /> 추가해 한눈에 확인해보세요.
        </LI.NoItemText>
      )}
    </LI.GridLayout>
  );
}

export default LikedItems;
