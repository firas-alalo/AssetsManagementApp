import React, { useMemo } from "react";
import countryList from "react-select-country-list";
import { NativeSelect } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const CountriesList = (props) => {
  const options = useMemo(() => countryList().getData(), []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {props.type}
        </InputLabel>

        <NativeSelect
          sx={{ minWidth: 120 }}
          onChange={props.onChange}
          inputProps={{
            name: "",
            id: props.type,
          }}
          value={props.value}
        >
          <option></option>
          {options.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default CountriesList;
