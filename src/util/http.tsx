import axiosInstance from '../api/axios';

//여기는 그냥 테스트 질문들 받아오는 코드인데, 나중에 다른 컴포넌트로 옮겨야 할 듯.
//임시 테스트 용 코드임

export async function requestGet() {
  const response = await axiosInstance.get('/api/test-question');
  const questions = response.data;
  return questions;
}
