import styled from 'styled-components';

import temp_img from './images/heart.svg';

export const ProfileBox = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
`;

export const ProfileAvatar = styled.div`
  background-image: url(${temp_img});
  background-position: center;
  background-repeat: no-repeat;

  width: 92px;
  height: 92px;
  border-radius: 50%;
`;
