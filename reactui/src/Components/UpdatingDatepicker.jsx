import * as React from "react";
import { useState } from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const StartDate = (props) => {
  const [startDate, setStartDate] = useState(props.value);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    // Pass the updated date to the parent component
    props.onChange(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["startDatePicker"]}
        sx={{ alignItems: "center", justifyContent: "center", marginTop: 2 }}
      >
        <DemoItem>
          <DatePicker
            label="Start Date"
            format="DD-MM-YYYY"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export const EndDate = (props) => {
  const [endDate, setEndDate] = useState(props.value);

  const handleEndDateChange = (date) => {
    setEndDate(date);
    // Pass the updated date to the parent component
    props.onChange(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["endDatePicker"]}
        sx={{ alignItems: "center", justifyContent: "center", marginBottom: 2 }}
      >
        <DemoItem>
          <DatePicker
            label="End Date"
            format="DD-MM-YYYY"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};
