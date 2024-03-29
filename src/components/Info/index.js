import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ButtonWrap, ImgWrap, Img } from './InfoElements';
import { ArrowForward, ArrowRight } from '../Hero/HeroElements';

const Info = ({lightBg, id, page, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
  const [hover, setHover] = useState(false);
  
  const onHover = () => {
    setHover(!hover);
  };

  const onClick = (e) => {
    e.preventDefault();
    if (page.charAt(0) === '/') {
      window.location.href = page;
    }
  }

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <ButtonWrap>
                  <Button
                    to={'home'}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    onClick={onClick}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1: 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button>
                </ButtonWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info
