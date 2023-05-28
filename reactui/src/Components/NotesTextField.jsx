import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function NotesTextField() {
    return (
        <Box sx={{ minWidth: 120, my: 2, backgroundColor: '#FFFFFF' }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField style={{ minWidth: '200%', backgroundColor: '#FFFFFF' }}
                    id="outlined-multiline-static"
                    label="Notes:"
                    multiline
                    rows={4}
                    defaultValue=""
                />
            </div>
        </Box>
    );
}

export default NotesTextField;