import React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

function CapacityAmount(props) {
    const { name, label, value, onChange } = props;

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <TextField
                    label={label}
                    id="outlined-start-adornment"
                    sx={{ width: '25ch', marginTop: '15px' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">MW</InputAdornment>,
                    }}
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </Box>
    );
}

export default CapacityAmount;
