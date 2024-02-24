import React from 'react';

import * as M from './MoreBox.style';
import { Button, Text } from '../common/Common';

interface BoxProps {
  title: string;
  imgSrc?: string;
  caption: string;
  btnText: string;
}

function MoreBox({ title, imgSrc, caption, btnText }: BoxProps) {
  return (
    <M.Box>
      <Text $fontSize={16} $fontWeight={700}>
        {title}
      </Text>
      <M.ImgWrapper />
      <Text $fontSize={12} $fontWeight={400} $marginBottom={16}>
        {caption}{' '}
      </Text>

      <Button>{btnText}</Button>
    </M.Box>
  );
}

export default MoreBox;
