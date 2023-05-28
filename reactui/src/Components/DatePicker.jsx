import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export function StartDatePicker() {
    const [value, setValue] = React.useState(dayjs());

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']} sx={{ marginTop: '3%' }}>
                <DatePicker
                    label="Start Date"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    format="DD-MM-YYYY"
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}

export function EndDatePicker() {
    const [value, setValue] = React.useState(dayjs());

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']} sx={{ marginTop: '3%' }}>
                <DatePicker
                    label="End Date"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    format="DD-MM-YYYY"
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
