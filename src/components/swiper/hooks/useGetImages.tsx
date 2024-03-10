import { useQuery } from '@tanstack/react-query';
import { getStyleImages } from '../../../util/http';

const useGetImages = () => {
  const queryResult = useQuery({
    queryKey: ['styleimages'],
    queryFn: getStyleImages,
    staleTime: 600000,
    gcTime: 600000,
  });
  return queryResult;
};

export default useGetImages;
