import styled from 'styled-components';

export const Text = styled.p<{
  $marginTop?: number;
  $marginBottom?: number;
  $marginLeft?: number;
  $marginRight?: number;
  $fontSize?: number;
  $fontWeight?: number;
}>`
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : 20)}px;
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : 300)};
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
  margin-left: ${(props) => (props.$marginLeft ? props.$marginLeft : 0)}px;
  margin-right: ${(props) => (props.$marginRight ? props.$marginRight : 0)}px;
`;

export const Caption = styled.p<{ $color?: string }>`
  margin-top: 28.5px;
  font-size: 14px;
  font-weight: 300;
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

export const Button = styled.div<{
  $width?: number;
  $height?: number;
  $fontSize?: number;
}>`
  width: ${(props) => (props.$width ? props.$width : 170)}px;
  height: ${(props) => (props.$height ? props.$height : 46)}px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background-color: #000;
  color: #fff;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : 16)}px;
  font-weight: 700;
`;
