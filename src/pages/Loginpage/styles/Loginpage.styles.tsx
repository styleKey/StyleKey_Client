import styled from 'styled-components';

export const LoginPage = styled.div`
  width: 100%;
  height: calc(100vh - 99px);
`;

export const LoginpageTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 45%;

  justify-content: center;
`;

export const LoginpageMiddle = styled.div`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginpageBottom = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
`;

export const LoginpageTopLogo = styled.div`
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginpageBottomText = styled.div`
  margin: 0 auto;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--Foundation-Grey-Dark, #737373);
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding-bottom: 10px;
  border-bottom: 1px solid #999;
`;

export const LoginpageBottomButton = styled.div`
  height: 50%;
  maring: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
