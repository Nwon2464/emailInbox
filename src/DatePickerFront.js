import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerFront = (props) => {
  return (
    <>
      <DatePicker
        selected={props.startDate}
        onSelect={props.handleDateSelect}
        onChange={(date) => props.setStartDate(date)}
        selectsStart
        startDate={props.startDate}
        endDate={props.endDate}
      />
    </>
  );
};

export default DatePickerFront;
