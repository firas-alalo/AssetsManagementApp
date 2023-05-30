import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import { WarningMessage } from './ResultMessage';

export default function MultiDatePicker({ fromDate, toDate, onChange, onDayCountChange, asset, setAsset }) {
    const [startValue, setStartValue] = React.useState(dayjs());
    const [endValue, setEndValue] = React.useState(dayjs());
    const [Warning, setWarning] = React.useState(null);

    // Call handleDayCountChange with updated startValue and endValue
    React.useEffect(() => {
        handleDayCountChange(startValue, endValue);
    }, [startValue, endValue]);

    // Create an array of dates between the start and end dates
    const getDatesInRange = (start, end) => {
        const dates = [];
        // A clone of the start date, currentDate, is created to avoid modifying the original date.
        let currentDate = start.clone();
        // Loop through the dates from start to end, including the end date
        // .isSame(end) is used to include the currentDate when it is the same as end date
        // end.add(1, 'day') is used to include the end date in the range
        while (currentDate.isSame(end) || currentDate.isBefore(end.add(1, 'day'))) {
            // Check if the current date is not a Saturday (6) or Sunday (0)
            if (currentDate.day() !== 6 && currentDate.day() !== 0) {
                // If the current date is not a weekend, push it to the dates array
                dates.push(currentDate.format('YYYY-MM-DD'));
            }
            // Move to the next day
            currentDate = currentDate.add(1, 'day');
        }
        return dates;
    };

    // Update the end date when the start date is changed to ensure that the range is valid
    const handleStartChange = (newValue) => {
        setStartValue(newValue);
        // Check if the end date is before the start date and update the start date if it is
        if (endValue.isBefore(newValue)) {
            handleEndChange(newValue);
        }
        const updatedAsset = { ...asset, contractStart: newValue };
        setAsset(updatedAsset);
        onChange({ target: { name: fromDate, value: newValue } });
    };

    const handleEndChange = (newValue) => {
        setEndValue(newValue);
        if (newValue.isBefore(startValue)) {
            handleStartChange(newValue);
        }

        // Show a warning if the end date is before the start date
        if (startValue.isAfter(newValue)) {
            setWarning("End date cannot be before start date");
        } else {
            setWarning(null);
            const updatedAsset = { ...asset, contractEnd: newValue };
            setAsset(updatedAsset);
            onChange({ target: { name: toDate, value: newValue } });
        }
    };

    const handleDayCountChange = (start, end) => {
        // Get an array of dates within the specified range using the getDatesInRange function
        const datesInRange = getDatesInRange(start, end);

        // Calculate the number of days in the date range by getting the length of the datesInRange array
        const dayCountValue = datesInRange.length;
        onDayCountChange({ target: { name: "quantity", value: dayCountValue } });
    };

    return (
        <Box sx={{ mx: 'auto', maxWidth: 'fit-content' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                    <DatePicker
                        label="Start date"
                        value={startValue}
                        onChange={handleStartChange}
                        format="DD-MM-YYYY"
                    />
                    <DatePicker
                        label="End date"
                        value={endValue}
                        onChange={handleEndChange}
                        format="DD-MM-YYYY"
                    />
                    {Warning && <p style={{ color: 'red' }}>{Warning}</p>}
                </DemoContainer>
            </LocalizationProvider>
        </Box>
    );
}
