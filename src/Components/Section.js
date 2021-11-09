import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
      <ItemText>
        <h1>{ title }</h1>
        <p>{description}</p>
      </ItemText>
      </Fade >
      
      <Buttons>
      <Fade bottom>
        <ButtonGroup>
          <LeftButton>{ leftBtnText }</LeftButton>
          {rightBtnText && 
          <RightButton>{ rightBtnText }</RightButton>
         }
        </ButtonGroup>
        </Fade>
        <DownArrow src="./images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${props => `url(${props.bgImage})` };
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width:768px){
      flex-direction:column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  border-radius: 100px;
  height: 40px;
  width: 256px;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
  font-size: 12px;
  margin:8px;
  cursor: pointer;
 
`;
const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.85;
`;
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s ;
`;

const Buttons =styled.div`
    
`
