import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Container from "@mui/material/Container";

const ProgressSpinner = () => {
  return (
    <Container sx={{ width: "60%" }}>
      <LinearProgress />
    </Container>
  );
};

export default ProgressSpinner;
