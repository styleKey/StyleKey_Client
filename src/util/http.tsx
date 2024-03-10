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
