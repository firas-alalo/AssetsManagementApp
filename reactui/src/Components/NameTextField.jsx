import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function NameTextField() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField style={{ width: '100%', backgroundColor: '#FFFFFF' }} id="outlined-basic" label="Name" variant="outlined" />
        </Box>
    );
}

export default NameTextField;