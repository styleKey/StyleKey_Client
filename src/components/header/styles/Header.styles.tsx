import styled from 'styled-components';
//NavBar2는 사용자가 스크롤 이상하게 했을때 밑에 컴포넌트가
//보이는 상황을 방지하기 위해 선언함
export const NavBar2 = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1000;
  height: 130px;
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

export const NavBar = styled.div`
  position: fixed;
  width: calc(100% - 32px);
  left: 16px;
  right: 16px;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  height: 130px;
  border-bottom: 1px solid black;
  background-color: white;
  padding-top: 32px;

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
  display: flex;
  align-items: center;
  justify-content: center;
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
