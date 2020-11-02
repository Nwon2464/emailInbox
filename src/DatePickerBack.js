import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerBack = (props) => {
  return (
    <>
      <span>&nbsp;-&nbsp;</span>
      <DatePicker
        selected={props.endDate}
        onSelect={props.handleDateSelect2}
        onChange={(date) => props.setEndDate(date)}
        selectsEnd
        startDate={props.startDate}
        endDate={props.endDate}
        minDate={props.startDate}
      />
    </>
  );
};

export default DatePickerBack;
