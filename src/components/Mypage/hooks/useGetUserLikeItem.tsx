import { useQuery } from '@tanstack/react-query';

import request from '../../../api/api';

export interface UserLikeItemType {
  id: number;
  title: string;
  sales_link: string;
  item_image_url: string;
  brand_id: number;
  category_id: number;
  coordinate_look_id: number;
  like_count: number;
}

export interface UserLikeCoordiType {
  id: number;
  title: string;
  sales_link: string;
  coordinate_look_image_url: string;
  style_point_id: number;
  like_count: number;
}

const fetchUserLikeItem = async () => {
  const response = await request<null, null, UserLikeItemType[]>({
    url: '/api/users/likes/items',
    method: 'get',
  });

  return response.data;
};

const fetchUserLikeCoordi = async () => {
  const response = await request<null, null, UserLikeCoordiType[]>({
    url: '/api/users/likes/coordinate-looks',
    method: 'get',
  });

  return response.data;
};

const fetchUserLiked = async (section: string) => {
  return section === '코디룩' ? fetchUserLikeCoordi() : fetchUserLikeItem();
};

const useGetUserLiked = (section: string) => {
  const { data } = useQuery({
    queryKey: ['user-liked-', { section }],
    queryFn: () => fetchUserLiked(section),
  });

  return data;
};

export default useGetUserLiked;
