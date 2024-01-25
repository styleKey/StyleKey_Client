import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 99px;
  border-bottom: 1px solid black;
`;

export const LeftSection = styled.div`
  flex: 1;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
`;
