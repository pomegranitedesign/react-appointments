import React from "react";
import styled from "styled-components";

import Calendar from "./Calendar";

const MakeAppointment = ({
  handleDateChange,
  handleEventNameChange,
  handleEventSubmit,
  eventName,
  date,
  errors
}) => {
  return (
    <Wrapper>
      <Title>Make a new appointment</Title>
      <Form onSubmit={handleEventSubmit}>
        <EventInput
          value={eventName}
          type="text"
          placeholder="Bake Potatoes..."
          onChange={handleEventNameChange}
          autoFocus
        />
      </Form>
      {errors.eventNameError ? <span>{errors.eventNameError}</span> : null}
      <Calendar handleDateChange={handleDateChange} />
      {errors.dateError.length ? <span>{errors.dateError}</span> : null}
      <MakeAppointmentButton onClick={handleEventSubmit}>
        Make Appointment
      </MakeAppointmentButton>
    </Wrapper>
  );
};

/**
 *
 * Styled Components
 *
 */
const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Form = styled.form``;

const EventInput = styled.input`
  padding-bottom: 5px;
  border: 0;
  margin-top: 10px;
  border-bottom: 1px solid #4834d4;
`;

const MakeAppointmentButton = styled.button`
  padding: 10px;
  width: 100%;
  border: 0px;
  background: #eb4d4b;
  color: white;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  outline: 0;

  &::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    background: #ff7979;
  }
`;

export default MakeAppointment;
