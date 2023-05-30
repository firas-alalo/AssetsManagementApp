import React, { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';

export function StartDatePicker({ contractStart, onChange }) {
    const [value, setValue] = useState(contractStart ? dayjs(contractStart).format('YYYY-MM-DD') : '');

    const handleDateChange = (newValue) => {
        const formattedDate = newValue ? newValue.format('YYYY-MM-DD') : '';
        setValue(formattedDate);
        onChange({ target: { name: 'contractStart', value: formattedDate } });
    };

    return (
        <Box sx={{ mx: 'auto', maxWidth: 'fit-content', marginTop: "30px"}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Start Date"
                    value={value}
                    onChange={handleDateChange}
                    format="DD-MM-YYYY"
                />
            </LocalizationProvider>
        </Box>
    );
}

export function EndDatePicker({ contractEnd, onChange }) {
    const [value, setValue] = useState(contractEnd ? dayjs(contractEnd).format('YYYY-MM-DD') : '');

    const handleDateChange = (newValue) => {
        const formattedDate = newValue ? newValue.format('YYYY-MM-DD') : '';
        setValue(formattedDate);
        onChange({ target: { name: 'contractEnd', value: formattedDate } });
    };

    return (
        <Box sx={{ mx: 'auto', maxWidth: 'fit-content', marginTop: "30px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="End Date"
                    value={value}
                    onChange={handleDateChange}
                    format="DD-MM-YYYY"
                />
            </LocalizationProvider>
        </Box>
    );
}