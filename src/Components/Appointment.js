import React from "react";
import styled from "styled-components";

const Appointment = ({ eventName, date }) => {
  return (
    <Wrapper>
      <EventName>{eventName}</EventName>
      <Date>{date}</Date>
      <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
    </Wrapper>
  );
};

/**
 * 
 * Styled Components
 * 
 */
const Wrapper = styled.div``;

const EventName = styled.h3``

const Date = styled.p``;

export default Appointment;
