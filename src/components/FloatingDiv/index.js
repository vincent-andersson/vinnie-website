import React from 'react';
import { FloatingDivContainer, FloatingDivImage, FloatingDivSpan } from './FloatingDivElements';

const FloatingDiv = ({image, text1, text2}) => {
  return (
    <FloatingDivContainer>
      <FloatingDivImage src={image} alt=""></FloatingDivImage>
      <FloatingDivSpan>
        {text1}
        <br />
        {text2}
      </FloatingDivSpan>
    </FloatingDivContainer>
  )
}

export default FloatingDiv