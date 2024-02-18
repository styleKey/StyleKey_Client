import styled from 'styled-components';

export const NavBar = styled.div`
  position: sticky;
  top: 0;
  margin: 0 16px;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  height: 99px;
  border-bottom: 1px solid black;
  background-color: white;

  //iphone 6/7/8 plus
  @media (max-height: 737px) {
    height: 80px;
  }
  //iphone SE
  @media (max-height: 668px) {
    height: 70px;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  font-size: 1.3rem;
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-left: 10px;
  cursor: pointer;
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
