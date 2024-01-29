import styled from 'styled-components';

export const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
  height: calc(100vh - 99px);
`;
export const LoginLogo = styled.div`
  margin: 0 auto;
  width: 124px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  //   여기 밑에는 걍 지워도 됨
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 60px;
`;
export const LoginFormTop = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const LoginFormMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  flex: 3;
`;
export const LoginFormBottom = styled.div`
  flex: 1;
`;
export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: auto 0;
  width: 100%;
  height: 70vh;
  background: var(--White, #fff);
  /* basic */
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);
`;

export const LoginInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 14%;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);
  margin-bottom: 8px;
  input {
    color: var(--Foundation-Grey-Normal, #999);

    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%; // 부모 컨테이너의 전체 너비를 사용
    height: 100%; // 부모 컨테이너의 전체 높이를 사용
    border: none; // 필요에 따라 border 제거
    padding: 10px; // 필요에 따라 padding 조정
    box-sizing: border-box; // padding과 border가 전체 크기에 포함되도록 설정
  }
`;

export const LoginButton = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--White, #fff);
  text-align: center;
  width: 85%;
  height: 14%;
  border-radius: 8px;
  background: rgba(153, 153, 153, 0.5);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

export const Findbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 5%;
  justify-content: space-around;
  color: var(--Foundation-Grey-Normal, #999);
  /* 캡션1_라이트_14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const EasyLoginBox = styled.div`
  width: 100%;
`;
export const EasyLoginBoxTop = styled.div`
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: var(--Foundation-Grey-Dark, #737373);
`;
export const EasyLoginBoxMiddle = styled.div`
  margin-top: 8px;
  width: 169px;
  height: 1px;
  background: #999;
`;
export const EasyLoginBoxBottom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  justify-content: space-around;
`;
