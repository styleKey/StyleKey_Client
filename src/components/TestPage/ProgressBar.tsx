import styled from 'styled-components';

export const ProgressBar = styled.div<{ progress: number }>`
  width: 100%;
  background-color: #e0e0e0;
  height: 10px;
  border-radius: 10px;
  margin-top: 10px;

  & > div {
    height: 100%;
    background-color: black;
    border-radius: 10px;
    width: ${(props) => props.progress}%;
    transition: width 0.3s ease-in-out;
  }
`;
