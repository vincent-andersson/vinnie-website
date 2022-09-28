import styled from 'styled-components';

export const FloatingDivContainer = styled.div`
  justify-content: space-around;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 19px 60px rgb(0 0 0 / 25%);
  border-radius: 17px;
  align-items: center;
  padding: 0px 40px 0px 0px;
  height: 4.5rem;
  max-width: 180px;
`;

export const FloatingDivImage = styled.img`
  transform: scale(0.4);
`;

export const FloatingDivSpan = styled.div`
  font-family: sans-serif;
  font-weight: 550;
  font-size: 16px;
  margin-left: -1rem;
`;