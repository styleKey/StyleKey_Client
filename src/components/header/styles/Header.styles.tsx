import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 99px;
  border-bottom: 1px solid black;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
`;

export const Styled = {
  NavBar,
  LeftSection,
  RightSection,
};
