import React from "react";
import styled from "styled-components";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Container bgImage={backgroundImg}>
      <Text>
        <h1>{title}</h1>
        <p>{description}</p>
      </Text>

      <Buttons>
        <ButtonWrap>
          <LeftBtn>{leftBtnText}</LeftBtn>
          <RightBtn>{rightBtnText}</RightBtn>
        </ButtonWrap>
        <Arrow src="images/down-arrow.svg" />
      </Buttons>
    </Container>
  );
}

export default Section;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;
const Text = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftBtn = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 50px;
  width: 300px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin: 8px;
  opacity: 0.85;
`;
const RightBtn = styled(LeftBtn)`
  background: white;
  color: black;
  opacity: 0.65;
`;

const Arrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
