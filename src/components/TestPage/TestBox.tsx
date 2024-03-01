import * as T from './styles/TestPage.style';
import MobileLayout from '../common/Layout';
import { useState, useEffect } from 'react';
import { ProgressBar } from './ProgressBar';
import useGetTest from './hooks/useGetTest';
import { Text } from '../common/Common';
import { useNavigate } from 'react-router-dom';

export default function TestBox() {
  const navigate = useNavigate();
  const {
    data: questions,
    isLoading,
    isError,
    isFetched,
    isStale,
  } = useGetTest();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    if (questions && questions.length > 0) {
      setIsDataLoaded(true);
    }
  }, [questions]);

  if (isFetched) {
    console.log('데이터가 캐시에서 가져온 것인지:', !isStale);
  }

  if (isLoading || !isDataLoaded) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading questions. Please try again later.</div>;
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
    setSelectedAnswers(updatedAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/result');
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
        <T.TestTextBox>{currentQuestion.content}</T.TestTextBox>
        {currentQuestion.answers.map(
          (answer: { content: string; answer_id: number }) => (
            <T.SelectButton
              key={answer.answer_id}
              onClick={() => handleSelectAnswer(answer.answer_id)}
              selected={
                selectedAnswers[currentQuestionIndex] === answer.answer_id
              }
            >
              {answer.content}
            </T.SelectButton>
          ),
        )}
        <div>
          <button
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            이전
          </button>
          <button
            onClick={goToNextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            다음
          </button>
        </div>
      </T.TestBody>
    </MobileLayout>
  );
}
