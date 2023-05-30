import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function NameTextField(props) {
    const { type, name, label, placeholder, value, onChange } = props;

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                style={{ width: '100%', backgroundColor: '#FFFFFF' }}
                variant="outlined"
                type={type}
                name={name}
                label={label}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </Box>
    );
}

export default NameTextField;
