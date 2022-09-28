import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Intro = styled.div`
  display: flex;
  height: 77vh;
  margin-top: 6rem;
  margin-left: 6rem;
  padding: 0.5rem 3.5rem;
  overflow: hidden;
  color: #000000;
`;

export const IntroLeft = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
  margin-top: 30px;
`;

export const IntroName = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpanOne = styled.span`
  color: #000000;
  font-weight: bold;
  font-size: 3rem;
`;

export const SpanTwo = styled.span`
  color: #7289da;
  font-weight: bold;
  font-size: 3rem;
`;

export const SpanThree = styled.span`
  color: #2c2f33;
  font-weight: 100;
  font-size: 16px;
`;

export const IntroButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#23272a' : '#99aab5')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#fff' : '#1a1e1e')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#99aab5' : '#23272a')};
  }
`;

export const IntroIcons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
  gap: 0rem;
`;

export const IconImage = styled.img`
  max-width: 100px;
  transform: scale(0.5);

  &:hover {
    cursor: pointer;
  }
`;

export const IntroRight = styled.div`
  flex: 1;

  >* {
    position: absolute;
    z-index: 1;
    margin-top: 90px;
  }
`;

export const IntroRightImageOne = styled.img`
  transform: scale(0.69);
  top: -4%;
`;

export const IntroRightImageTwo = styled.img`
  transform: scale(0.67);
  top: -0.6%;
`;

export const IntroRightImageThree = styled.img`
  transform: scale(0.6);
  top: 2%;
  left: 58%;
`;

export const IntroRightImageFour = styled.img`
  transform: scale(0.15);
  top: -23%;
  left: 42%;
`;

export const FloatingDivWrapperOne = styled.div`
  top: 14%;
  left: 84%;
`;

export const FloatingDivWrapperTwo = styled.div`
  top: 65%;
  left: 58%;
`;

export const BlurDivOne = styled.div`
  background: #edd0ff;
  width: 22rem;
  height: 14rem;
  border-radius: 50%;
  filter: blur(72px);
  z-index: -9;
  top: 10%;
  left: 50%;
`;

export const BlurDivTwo = styled.div`
  background: #c1f5ff;
  width: 22rem;
  height: 14rem;
  border-radius: 50%;
  filter: blur(72px);
  z-index: -9;
  top: 57%;
  left: 75%;
`;