import * as R from '../components/ResultPage/styles/ResultPage.style';

import MobileLayout from '../components/common/Layout';
import { Text } from '../components/common/Common';

import Description from '../components/ResultPage/Description';
import MoreBox from '../components/ResultPage/MoreBox';

import link_img from '../components/ResultPage/images/link.svg';
import retry_img from '../components/ResultPage/images/update.svg';

import StylePointDetail from '../components/stylepoints/StylePointDetail';

function ResultPage() {
  // 로컬 스토리지에서 testResultDetails 배열을 가져옵니다.

  const storedTestResultDetailsString =
    localStorage.getItem('testResultDetails');
  if (storedTestResultDetailsString !== null) {
    const storedTestResultDetails = JSON.parse(storedTestResultDetailsString);
    console.log(storedTestResultDetails);
    console.log(typeof storedTestResultDetails[0].style_point_id); // 이것은 변수의 타입을 콘솔에 출력합니다.

    const styleDetails = StylePointDetail({
      id: storedTestResultDetails[0].style_point_id,
    });
    const styledetailLines = styleDetails?.styledetail.split('\n');
    const lastLineIndex = styledetailLines ? styledetailLines.length - 1 : 0;
    console.log(styleDetails);
    return (
      <MobileLayout>
        {storedTestResultDetails !== null ? (
          <>
            <div style={{ marginTop: '20px' }}>
              <Text $fontSize={16} $marginBottom={6}>
                당신의 패션 유형은
              </Text>
              <R.KeyTypo>
                {styledetailLines?.map((line, index) => (
                  <p key={index}>
                    {line}
                    <span>
                      {index === lastLineIndex && styleDetails?.stylepoint}
                    </span>
                  </p>
                ))}
              </R.KeyTypo>
              <Text $fontSize={12} $fontWeight={400} $marginTop={5}>
                {styleDetails?.stylepoint} 포인트가{' '}
                {(storedTestResultDetails[0].score / 8) * 100}%로 제일 높게
                나왔어요!
              </Text>
            </div>
            <R.ImgWrapper>
              <img
                src={storedTestResultDetails[0].style_point_image}
                style={{ width: '100%' }}
              ></img>
            </R.ImgWrapper>
            <Description
              stylePoint={styleDetails?.stylepoint}
              details={styleDetails?.details}
            />
            <R.LinkButton>
              <img src={link_img} alt="link" />
              결과 공유하기
            </R.LinkButton>
            <MoreBox
              title="이런 유형도 잘 어울려요!"
              caption="Y2K감성을 재해석한 빈티지한 레트로 "
              btnText="레트로 포인트 보기"
            />
            <MoreBox
              title="이런 코디룩은 어때요?"
              caption="나의 유형에 어울리는 코디룩"
              btnText="코디룩 더 보기"
            />
            <MoreBox
              title="이런 브랜드는 어때요?"
              caption="나의 유형에 어울리는 브랜드"
              btnText="브랜드 더 보기"
            />
            <R.LinkButton>
              <img src={retry_img} alt="retry" />
              테스트 다시하기
            </R.LinkButton>
          </>
        ) : (
          <Text>로컬 스토리지에서 testResultDetails를 찾을 수 없습니다.</Text>
        )}
      </MobileLayout>
    );
  } else {
    console.log('로컬 스토리지에서 testResultDetails를 찾을 수 없습니다.');
  }
}

export default ResultPage;
