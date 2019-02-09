import React from "react";
import styled from "styled-components";

import Container from "./Container";

const Header = _ => (
  <Container>
    <Wrapper>
      <Title>React Calendar</Title>
    </Wrapper>
  </Container>
);

/**
 *
 * Styled Components
 *
 */
const Wrapper = styled.header`
  padding-top: 5vh;
  padding-bottom: 5vh;
`;

const Title = styled.h1``;

export default Header;
