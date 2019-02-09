import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Layout, MakeAppointment, Appointments } from "../Components";

const App = _ => {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({ eventNameError: "", dateError: "" });
  const [appointments, setAppointments] = useState([
    { eventName: "", date: "" }
  ]);

  // Functions
  const handleEventNameChange = event => setEventName(event.target.value);

  const handleDateChange = event => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    // Date
    const day = event._d.getDay();
    const month = event._d.getMonth();
    const year = event._d.getFullYear();

    // Time
    const hours = event._d.getHours();
    const minutes = event._d.getMinutes();
    const seconds =
      event._d.getSeconds() < 10
        ? `0${event._d.getSeconds()}`
        : event._d.getSeconds();

    console.log(seconds);

    setDate(
      `${months[month]} ${day} ${year}, ${hours}:${minutes}:${seconds} ${
        hours > 12 ? "PM" : "AM"
      }`
    );
  };

  const handleEventSubmit = event => {
    event.preventDefault();

    // Error handling
    if (eventName.length === 0 && date.length === 0) {
      setErrors({
        eventNameError: "Please Provide An Event",
        dateError: "Please Provide A Date For An Event"
      });
    } else if (eventName.length === 0 && date.length !== 0) {
      setErrors({
        eventNameError: "Please Provide An Event",
        dateError: ""
      });
    } else if (eventName.length > 0 && date.length === 0) {
      setErrors({
        eventNameError: "",
        dateError: "Please Provide A Date For An Event"
      });
    } else {
      setErrors({ ...errors, eventNameError: "", dateError: "" });
    }

    setAppointments([...appointments, { eventName, date }]);
    setEventName("");
  };

  // adds the items to the local storage
  // useEffect is being used as a Component Lifecycle
  useEffect(_ => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  });

  return (
    <Layout>
      <Title>Appointments</Title>
      <MakeAppointment
        handleDateChange={handleDateChange}
        handleEventNameChange={handleEventNameChange}
        handleEventSubmit={handleEventSubmit}
        eventName={eventName}
        date={date}
        errors={errors}
      />
      {appointments.length < 1 ? (
        <h1>Appointments Will Be Displayed Here</h1>
      ) : (
        <Appointments appointments={appointments} />
      )}
    </Layout>
  );
};

/**
 *
 * Styled Components
 *
 */
const Title = styled.h2`
  margin-bottom: 20px;
`;

export default App;
