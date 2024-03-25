import { useState } from 'react';

import MobileLayout from '../../common/Layout';
import ItemSlider from './ItemSlider';
import LikedItems from './LikedItems';

function LikePage() {
  const [section, setSection] = useState('코디룩');
  const [categories, setCategories] = useState('전체보기');

  return (
    <MobileLayout>
      <ItemSlider
        section={section}
        setSection={setSection}
        categories={categories}
        setCategories={setCategories}
      />
      <LikedItems section={section} categories={categories} />
    </MobileLayout>
  );
}

export default LikePage;
