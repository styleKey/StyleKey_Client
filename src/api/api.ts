import { AxiosResponse } from 'axios';
import axiosInstance from './axios';

interface Request<D, P> {
  url: string;
  method: string;
  data?: D;
  params?: P;
}

// TODO: 응답 데이터 타입 설정
interface Response<R> {
  code: number;
  status: string;
  message: string;
  data: R;
}

async function request<D, P, R>({ url, method, data, params }: Request<D, P>) {
  const response = await axiosInstance<D, AxiosResponse<Response<R>>>({
    url,
    method,
    data,
    params,
  });

  return response.data;
}

export default request;
