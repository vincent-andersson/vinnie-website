import React, { useState } from 'react'
import { HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroH1, HeroP, HeroButtonWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements';
import Video from '../../videos/video.mp4';

const Hero = () => {
  const [hover, setHover] = useState(false);
  
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type='/video/mp4' />    
      </HeroBackground>
      <HeroContent>
        <HeroH1>Vinnie [ vin-ee ]</HeroH1>
        <HeroP>
          Vinnie is that guy that everyone wants to be friends with! He is always there for you in a clutch situation. He is also a 'hustler' and is always on the grind. When he is not out making money, he has even more fun spending it! The word cheap is not in this man's vocabulary and he makes sure everybody has a good time. When he is not out popping bottles at the club, he's usually making sure his degenerate friends are not in jail.
        </HeroP>
        <HeroButtonWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Learn More {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroButtonWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
