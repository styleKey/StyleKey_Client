import { useState } from 'react';
import styled from 'styled-components';

function ItemSlider() {
  // TODO : data fetchin으로 목록 아이템 가져오기
  // TODO : Sort 기능 추가
  const [section, setSection] = useState('코디룩');
  const [categories, setCategories] = useState('전체보기');

  return (
    <div style={{ margin: '20px 0' }}>
      <SliderBox>
        <SlideItem
          $selected={section === '코디룩'}
          onClick={() => {
            setSection(() => '코디룩');
          }}
        >
          코디룩
        </SlideItem>
        <SlideItem
          $selected={section === '아이템'}
          onClick={() => {
            setSection(() => '아이템');
          }}
        >
          아이템
        </SlideItem>
      </SliderBox>
      <SliderBox style={{ marginTop: '12px' }}>
        <SlideItem
          $selected={categories === '전체보기'}
          onClick={() => {
            setCategories(() => '전체보기');
          }}
        >
          전체보기
        </SlideItem>
        <SmallSlideItem>가나다</SmallSlideItem>
        <SmallSlideItem>가나다</SmallSlideItem>
        <SmallSlideItem>가나다</SmallSlideItem>
        <SmallSlideItem>가나다</SmallSlideItem>
        <SmallSlideItem>가나다</SmallSlideItem>
      </SliderBox>
    </div>
  );
}

export default ItemSlider;

const SliderBox = styled.div`
  height: 44px;
  display: flex;
  overflow-x: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SlideItem = styled.div<{ $selected?: boolean }>`
  width: 96px;
  height: 40px;
  flex-shrink: 0;
  margin-right: 10px;
  border-radius: 12px;
  border: 2px solid;
  border-color: ${(props) => (props.$selected ? '#363636' : '#999')};
  background-color: ${(props) => (props.$selected ? '#363636' : 'transparent')};

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$selected ? '#fff' : '#999')};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;

  cursor: pointer;
`;

const SmallSlideItem = styled(SlideItem)`
  width: 64px;
`;
