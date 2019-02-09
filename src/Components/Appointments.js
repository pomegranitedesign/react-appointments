import React from "react";
import styled from "styled-components";
import uuid from "uuid/v4";

import Appointment from "./Appointment";

const Appointments = ({ appointments }) => {
  // Functions
  const renderAppointments = _ => {
    return appointments.map(appointment => (
      <Appointment key={uuid()} {...appointment} />
    ));
  };

  return <Wrapper>{renderAppointments()}</Wrapper>;
};

/**
 *
 * Styled Components
 *
 */
const Wrapper = styled.div``;

export default Appointments;
