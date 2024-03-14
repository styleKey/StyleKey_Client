import axiosInstance from '../api/axios';

export async function requestGet() {
  const response = await axiosInstance.get('/api/test-questions');
  const questions = response.data;
  return questions;
}

export async function getStyleImages() {
  const response = await axiosInstance.get('/api/style-points');
  const images = response.data;
  return images;
}

export async function requestPost(updatedAnswers: any) {
  try {
    const response = await axiosInstance.post('/api/tests/preview', {
      answer_ids: updatedAnswers,
    });
    return response.data;
  } catch (error) {
    console.error('Error while sending POST request:', error);
    throw error;
  }
}
