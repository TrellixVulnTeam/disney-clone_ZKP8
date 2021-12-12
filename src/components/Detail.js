import React from 'react';
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="/images/login-background.jpg" />
      </Background>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw - 5px);

  `

  const Background = styled.div`
  
  `
