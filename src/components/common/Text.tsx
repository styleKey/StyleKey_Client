import styled from 'styled-components';

export const TextRegular = styled.p<{
  $marginTop?: number;
  $marginBottom?: number;
}>`
  font-size: 16px;
  font-weight: 300;
  text-align: center;

  margin-top: ${(props) => (props.$marginTop ? props.$marginTop : 0)}px;
  margin-bottom: ${(props) =>
    props.$marginBottom ? props.$marginBottom : 0}px;
`;

export const Caption = styled.p<{ $color?: string }>`
  font-size: 14px;
  font-weight: 200;
  color: #343434;
  text-align: center;

  color: ${(props) => props.color || 'black'};
`;

// export const TextLigth =
