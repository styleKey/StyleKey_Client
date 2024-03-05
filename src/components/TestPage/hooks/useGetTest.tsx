import { useQuery } from '@tanstack/react-query';
import { requestGet } from '../../../util/http';

const useGetTest = () => {
  const queryResult = useQuery({
    queryKey: ['testinfo'],
    queryFn: requestGet,
    staleTime: 600000, //테스트 문제 받아오는 건 처음만 받아오고 10분 동안은 안 받아오게 설정함
    gcTime: 600000, //그래서 캐시에도 10분동안 남아있도록 설정
  });
  return queryResult;
};

export default useGetTest;
