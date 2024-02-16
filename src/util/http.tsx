import axios from 'axios';
export async function requestGet() {
  const response = await axios.get('http://localhost:9000/api/test-question');
  //console.log(response.data);
  const questions = response.data;
  return questions;
}
