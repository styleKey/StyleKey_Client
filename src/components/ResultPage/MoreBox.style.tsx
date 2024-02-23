import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: 362px;

  margin-top: 24px;
  border-radius: 12px;
  padding: 25px 19px;
  background: var(--White, #fff);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgWrapper = styled.div<{}>`
  width: 170px;
  height: 210px;
  background-color: #d1d1f8;
  margin: 12px 0;
`;
