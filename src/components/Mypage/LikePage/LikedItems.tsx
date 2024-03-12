import * as LI from './LikedItems.style';

const TEMP = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

function LikedItems() {
  return (
    <LI.GridLayout>
      {TEMP.map((item) => (
        <LI.Box>{item}</LI.Box>
      ))}
      {TEMP.length === 0 && (
        <LI.NoItemText>
          좋아하는 코디룩이나 아이템을
          <br /> 추가해 한눈에 확인해보세요.
        </LI.NoItemText>
      )}
      {/* 빈 배열일 경우 */}
    </LI.GridLayout>
  );
}

export default LikedItems;
