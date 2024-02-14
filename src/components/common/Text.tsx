import styled from 'styled-components';

export const TextRegular = styled.p<{
  $marginTop?: number;
  $marginBottom?: number;
}>`
  font-size: 22px;
  font-weight: 300;
  text-align: center;
  //iphone 6/7/8 plus
  @media (max-height: 737px) {
    margin-top: 70px;
    font-size: 20px;
  }
  //iphone SE
  @media (max-height: 668px) {
    margin-top: 60px;
    font-size: 18px;
  }

  margin-top: ${(props) => (props.$marginTop ? props.$marginTop : 0)}px;
  margin-bottom: ${(props) =>
    props.$marginBottom ? props.$marginBottom : 0}px;
`;

export const TextTitle = styled.p<{
  $marginTop?: number;
  $marginBottom?: number;
}>`
  font-size: 20px;
  font-weight: 500;
  text-align: center;

  margin-top: ${(props) => (props.$marginTop ? props.$marginTop : 0)}px;
  margin-bottom: ${(props) =>
    props.$marginBottom ? props.$marginBottom : 0}px;
`;

export const Caption = styled.p<{ $color?: string }>`
  font-size: 20px;
  font-weight: 200;
  color: #343434;
  text-align: center;

  color: ${(props) => props.color || 'black'};
  //iphone 6/7/8 plus
  @media (max-height: 737px) {
    font-size: 20px;
  }
  //iphone SE
  @media (max-height: 668px) {
    font-size: 16px;
  }
`;

// export const TextLigth =
