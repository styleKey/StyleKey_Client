import * as T from './styles/TestPage.style';
import MobileLayout from '../common/Layout';
import { useState, useEffect } from 'react';
import { ProgressBar } from './ProgressBar';
import useGetTest from './hooks/useGetTest';
import { Text } from '../common/Common';
import { useNavigate } from 'react-router-dom';
import NextButton from './images/Next.svg';
import PrevButton from './images/Prev.svg';

export default function TestBox() {
  const navigate = useNavigate();

  const { data: questions, isLoading, isError } = useGetTest();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [showQuestion, setShowQuestion] = useState(true);

  //사용자가 직접 /test 입력하고 들어오는 경우 대비 코드
  useEffect(() => {
    if (questions && questions.length > 0) {
      setIsDataLoaded(true);
    }
  }, [questions]);

  //이미지 미리 한 문제 뒤까지 받아오는 코드 (캐싱)
  useEffect(() => {
    if (questions && currentQuestionIndex < questions.length - 1) {
      const nextQuestionImage = new Image();
      nextQuestionImage.src = questions[currentQuestionIndex + 1].image_url;
    }
  }, [currentQuestionIndex, questions]);

  if (isLoading || !isDataLoaded) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>질문지를 불러오는데 에러가 발생했습니다.</div>;
  }

  const currentQuestion = questions[currentQuestionIndex] || {
    content: '',
    answers: [],
  };

  const progress = questions
    ? (currentQuestionIndex / (questions.length - 1)) * 100
    : 0;

  const handleSelectAnswer = (answerId: number) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answerId;

    if (currentQuestionIndex < questions.length - 1) {
      setSelectedAnswers(updatedAnswers);
      setShowQuestion(false);

      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setShowQuestion(true);
      }, 500);
    } else {
      setSelectedAnswers(updatedAnswers);
      setShowQuestion(false);

      setTimeout(() => {
        console.log(updatedAnswers);
        navigate('/result');
      }, 500);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <MobileLayout>
      <T.TestBody>
        <T.TestNumber>
          <T.TestNumberText>
            <Text $fontSize={24} $fontWeight={400}>
              Q{currentQuestionIndex + 1}
            </Text>
            <Text $fontSize={12} $fontWeight={400}>
              {currentQuestionIndex + 1}/{questions.length}
            </Text>
          </T.TestNumberText>

          <ProgressBar progress={progress}>
            <div></div>
          </ProgressBar>
        </T.TestNumber>
        <T.TestTextBox>
          <img
            src={PrevButton}
            alt="이전"
            onClick={goToPreviousQuestion}
            style={{
              opacity: currentQuestionIndex === 0 ? 0 : 1,
              pointerEvents: currentQuestionIndex === 0 ? 'none' : 'auto',
            }}
          />
          <T.TestContent>
            <T.TestPictureBox>
              <img src={currentQuestion.image_url} alt="테스트 질문 이미지" />
            </T.TestPictureBox>
            {currentQuestion.content}
          </T.TestContent>

          <img
            src={NextButton}
            alt="다음"
            onClick={goToNextQuestion}
            style={{
              opacity: currentQuestionIndex === questions.length - 1 ? 0 : 1,
              pointerEvents:
                currentQuestionIndex === questions.length - 1 ? 'none' : 'auto',
            }}
          />
        </T.TestTextBox>
        {currentQuestion.answers.map(
          (answer: { content: string; answer_id: number }) => (
            <T.SelectButton
              key={answer.answer_id}
              onClick={() => handleSelectAnswer(answer.answer_id)}
              selected={
                selectedAnswers[currentQuestionIndex] === answer.answer_id
              }
              show={showQuestion}
            >
              {answer.content}
            </T.SelectButton>
          ),
        )}
      </T.TestBody>
    </MobileLayout>
  );
}
