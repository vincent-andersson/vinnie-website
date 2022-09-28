import React, { useState } from 'react';
import { Intro, IntroLeft, IntroName, IntroButtonWrapper, IntroRight, SpanOne, SpanTwo, SpanThree, Button, IntroIcons, IconImage, IntroRightImageOne, IntroRightImageTwo, IntroRightImageThree, IntroRightImageFour, FloatingDivWrapperOne, FloatingDivWrapperTwo, BlurDivOne, BlurDivTwo } from './ProfileElements';
import Github from '../../images/github.png';
import LinkedIn from '../../images/linkedin.png';
import Instagram from '../../images/instagram.png';
import Vector1 from '../../images/Vector1.png';
import Vector2 from '../../images/Vector2.png';
import Pfp from '../../images/pfp.gif';
import Crown from '../../images/crown.png';
import ThumbUp from '../../images/thumbup.png';
import Verified from '../../images/verified.png';
import { ArrowForward, ArrowRight } from '../Hero/HeroElements';
import FloatingDiv from '../FloatingDiv';

const Profile = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
      setHover(!hover);
    };

    const toURL = () => {
      window.location.href = '/';
    }

  return (
    <Intro>
      <IntroLeft>
        <IntroName>
          <SpanOne>Hello! I Am</SpanOne>
          <SpanTwo>Vincent Andersson</SpanTwo>
          <SpanThree>Junior Full Stack Developer with experience in web designing and development, also in web monitoring and automation</SpanThree>
        </IntroName>
        <IntroButtonWrapper>
          <Button
            to="/"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            onClick={toURL}
            primary='true'
            dark='true'
            >
            Hire Me {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </IntroButtonWrapper>
        <IntroIcons>
          <a href='https://github.com/vincent-andersson'>
            <IconImage src={Github} alt=""></IconImage>
          </a>
          <a href='https://www.linkedin.com/in/vincent-andersson/'>
            <IconImage src={LinkedIn} alt=""></IconImage>
          </a>
          <a href='https://www.instagram.com/vincent_ah/'>
            <IconImage src={Instagram} alt=""></IconImage>
          </a>
        </IntroIcons>
      </IntroLeft>
      <IntroRight>
        <IntroRightImageOne src={Vector1} alt="" />
        <IntroRightImageTwo src={Vector2} alt="" />
        <IntroRightImageThree src={Pfp} alt="" />
        <IntroRightImageFour src={Verified} alt="" />
        <FloatingDivWrapperOne>
          <FloatingDiv image={Crown} text1='Web ' text2='Developer' />
        </FloatingDivWrapperOne>
        <FloatingDivWrapperTwo>
          <FloatingDiv image={ThumbUp} text1='Sneakers ' text2='Automation' />
        </FloatingDivWrapperTwo>
        <BlurDivOne></BlurDivOne>
        <BlurDivTwo></BlurDivTwo>
      </IntroRight>
    </Intro>
  )
}

export default Profile