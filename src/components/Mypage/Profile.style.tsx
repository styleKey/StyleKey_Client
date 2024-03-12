import styled from 'styled-components';

import temp_img from './images/heart.svg';

export const ProfileBox = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
`;

export const ProfileAvatar = styled.div<{ profileImg?: string }>`
  background-image: ${({ profileImg }) =>
    profileImg ? `url(${profileImg})` : `url(${temp_img})`};
  background-position: center;
  background-repeat: no-repeat;

  width: 92px;
  height: 92px;
  border-radius: 50%;
  background-color: #dddddd;

  margin-right: 12px;
`;

export const LinkSpan = styled.span`
  font-size: 12px;
  color: #9c9a9a;
  text-decoration: underline;

  cursor: pointer;
`;
