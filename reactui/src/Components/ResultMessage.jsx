import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
export function SuccessMessage() {
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Stack sx={{ width: '42%' }} spacing={1}>
            <Button variant="contained" href="/">Browse Assets</Button>

            {showMessage && (
                <Alert variant="filled" severity="success">
                    A new asset has been created!
                </Alert>
            )}
        </Stack>
    );
}

export function FailedMessage() {
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Stack sx={{ width: '42%' }} spacing={1}>
            {showMessage && (
                <Alert variant="filled" severity="error">
                    An error occured while creating a new asset!
                </Alert>
            )}
        </Stack>
    );
}
