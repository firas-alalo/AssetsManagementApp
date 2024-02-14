import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function SuccessMessage() {
    return (
        <Stack sx={{ width: '42%' }} spacing={1}>
            <Alert variant="filled" severity="success">
                A new asset has been created!
            </Alert>
            <Button variant="contained" href="/">Return to Homepage</Button>

        </Stack>
    );
}

export function FailedMessage() {
    return (
        <Stack sx={{ width: '42%' }} spacing={1}>
            <Alert variant="filled" severity="error">
                An error occured while creating a new asset!
            </Alert>
            <Button variant="contained" href="/">Return to Homepage</Button>
        </Stack>
    );
}

