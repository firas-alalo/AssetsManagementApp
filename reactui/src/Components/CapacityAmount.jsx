import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

function CapacityAmount() {

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <TextField
                    label="Capacity"
                    id="outlined-start-adornment"
                    sx={{ width: '25ch', marginTop:'15px' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">MW</InputAdornment>,
                    }}
                />
            </div>
        </Box>
    );
}

export default CapacityAmount;