import styled from 'styled-components';

export const NavBar = styled.div`
  position: sticky;
  top: 0;
  margin: 0 16px;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-align: center;
  height: 99px;
  border-bottom: 1px solid black;
  background-color: white;
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
