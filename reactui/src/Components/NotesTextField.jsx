import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function NotesTextField(props) {
  const { type, name, label, placeholder, value, onChange } = props;

  return (
    <Box
      sx={{ minWidth: 120, my: 2, backgroundColor: "#FFFFFF" }}
      autoComplete="off"
    >
      <TextField
        style={{ minWidth: "200%", backgroundColor: "#FFFFFF" }}
        id="outlined-multiline-static"
        name={name}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        multiline
        rows={4}
      />
    </Box>
  );
}

export default NotesTextField;
