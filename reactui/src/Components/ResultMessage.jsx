import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const ResultMessage = ({ message, severity, onClose }) => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
      onClose(); // Call onClose after message display duration
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        transform: "translate(-50%, -50%)",
        zIndex: "9999", // Ensures the message is on top of everything
      }}
    >
      <Stack sx={{ width: "42%" }} spacing={1}>
        {showMessage && (
          <Alert variant="filled" severity={severity}>
            {message}
          </Alert>
        )}
      </Stack>
    </div>
  );
};

export default ResultMessage;
