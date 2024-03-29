import styled, { keyframes } from 'styled-components';
import { TestButton } from '../HomePage/styles/Homepage.styles';
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
  margin-top: ${(props) => (props.$marginTop ? props.$marginTop : 0)}px;
  margin-bottom: ${(props) =>
    props.$marginBottom ? props.$marginBottom : 0}px;
  margin-left: ${(props) => (props.$marginLeft ? props.$marginLeft : 0)}px;
  margin-right: ${(props) => (props.$marginRight ? props.$marginRight : 0)}px;
`;

export const Caption = styled.p<{ $color?: string }>`
  margin-top: 26px;
  font-size: 14px;
  font-weight: 300;
  color: #343434;
  text-align: center;

  color: ${(props) => props.color || 'black'};
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

interface FadeInTextProps {
  delay: string;
}

export const FadeInText = styled(Text)<FadeInTextProps>`
  animation: ${fadeIn} 1s ease-in forwards;
  animation-delay: ${(props) => props.delay || '0s'};
  opacity: 0;
`;

export const FadeInButton = styled(TestButton)<FadeInTextProps>`
  animation: ${fadeIn} 1s ease-in forwards;
  animation-delay: ${(props) => props.delay || '0s'};
  opacity: 0;
  margin-top: 4dvh;
`;
