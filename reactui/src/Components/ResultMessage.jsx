import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export function SuccessMessage() {
    return (
        <Stack sx={{ width: '50%' }} spacing={2}>
            <Alert variant="filled" severity="success">
                A new asset has been created!
            </Alert>
        </Stack>
    );
}

export function FailedMessage() {
    return (
        <Stack sx={{ width: '50%' }} spacing={2}>
            <Alert variant="filled" severity="error">
                An error occured while creating a new asset!
            </Alert>
        </Stack>
    );
}

