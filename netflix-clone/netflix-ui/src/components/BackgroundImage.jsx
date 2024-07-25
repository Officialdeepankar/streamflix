import React from "react";
import styled from "styled-components";
import background from "../assets/login.jpg";// image yahan padi thi 

export default function BackgroundImage() {
  return (
    <Container>
      <img src={background} alt="background" />
    </Container>
  );
}
const Container=styled.div`
height: 100vh;// to fit the image 
width: 100vw;
img {
  height: 100vh;
  width: 100vw;
}`;// taki mein css yahin likh paoon