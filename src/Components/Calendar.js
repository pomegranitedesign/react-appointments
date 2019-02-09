import React from "react";
import styled from "styled-components";
import Datetime from "react-datetime";

const Calendar = ({ handleDateChange }) => {
  return (
    <Wrapper>
      <Datetime
        input={false}
        onChange={handleDateChange}
        defaultValue={new Date()}
        isValidDate={current => {
          const yesterday = Datetime.moment().subtract(1, "day");
          return current.isAfter(yesterday);
        }}
      />
    </Wrapper>
  );
};

/**
 *
 * Styled Components
 *
 */
const Wrapper = styled.div`
  padding-top: 20px;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export default Calendar;
