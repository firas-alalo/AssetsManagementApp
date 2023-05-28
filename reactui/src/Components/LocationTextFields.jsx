import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function LocationTextField() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '30%' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="standard-multiline-flexible"
                label="Longitude"
                multiline
                maxRows={1}
                variant="standard"
            />
            <TextField
                id="standard-textarea"
                label="Latitude"
                multiline
                variant="standard"
            />
        </Box>
    );
}

export default LocationTextField;