import { useQuery } from '@tanstack/react-query';

import request from '../../../api/api';

interface UserData {
  name: string;
  nickname: string;
  gender: string;
}

const fetchUserinfo = async () => {
  const response = await request<null, null, UserData>({
    url: '/user/info',
    method: 'get',
  });

  return response;
};

const useGetUserInfo = () => {
  const { data: userinfo } = useQuery({
    queryKey: ['userinfo'],
    queryFn: fetchUserinfo,
  });

  return userinfo;
};

export default useGetUserInfo;
