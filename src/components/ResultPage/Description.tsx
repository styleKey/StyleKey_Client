import React from 'react';
import * as R from '../../pages/ResultPage/ResultPage.style';

function Description() {
  return (
    <R.ContentsBox>
      <R.Title $fontSize={18} $fontWeight={700} $marginBottom={25}>
        변화에 민감하고 개성을 추구하는 “유니크”
      </R.Title>
      <R.Line />
      <div style={{ marginTop: '20px' }}>
        <ul>
          <R.ListItem>
            유니크 포인트는 개개인의 다양성과 시대에 따라 변화하는 스타일을
            반영하여 평범하지 않은 독보적이고 감각적인 무드를 표현하는 스타일
            유형입니다.
          </R.ListItem>
          <R.ListItem>
            이 유형의 사람들은 패션을 통해 자신만의 독특한 개성과 창조성을
            표현하는 것을 중요하게 생각합니다. 이는 패션을 예술의 한 분야로 보는
            관점에서 비롯된 문화적 흐름이며, 표현의 자유를 중시하는 현대 사회의
            가치관을 반영합니다.
          </R.ListItem>
          <R.ListItem>
            이들은 자신만의 스타일을 만들어 내는 데 있어, 예측 불가능한 색상
            조합, 눈에 띄는 패턴, 과장된 액세서리, 비대칭적인 디자인 등을
            선호합니다.
          </R.ListItem>
        </ul>
      </div>
    </R.ContentsBox>
  );
}

export default Description;
